import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";

import dbConnect from "./config/dbConnection.js";
import userRoutes from "./routes/userRoute.js";
import "./config/passportConfig.js";

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

/* -------------------------------------------------------------------------- */
/*                                MIDDLEWARES                                 */
/* -------------------------------------------------------------------------- */

// Configure CORS to allow requests from frontend application
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true, // Allow cookies and authentication headers
};

// Enable Cross-Origin Resource Sharing
app.use(cors(corsOptions));

// Parse incoming JSON request bodies
app.use(express.json({ limit: "100mb" }));

// Log HTTP requests in development
app.use(morgan("dev"));

// Session middleware required for Passport authentication
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Session encryption key
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create empty sessions
    cookie: {
      maxAge: 1000 * 60 * 60, // Session expires after 1 hour
    },
  })
);

// Initialize Passport authentication
app.use(passport.initialize());

// Enable persistent login sessions
app.use(passport.session());

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */

// Health check route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Authentication routes
app.use("/api/auth", userRoutes);

/* -------------------------------------------------------------------------- */
/*                               SERVER STARTUP                               */
/* -------------------------------------------------------------------------- */

const PORT = process.env.PORT || 5000;

// Connect to MongoDB before starting the server
dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database:", err);
    process.exit(1);
  });