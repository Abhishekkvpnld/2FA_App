import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import dbConnect from "./config/dbConnection.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();

//  middlewares

const corsoptions = {
  origin: process.env.CLIENT_URL,
  credentials: true, //access-control-allow-credentials:true
};

app.use(cors(corsoptions));
app.use(express.json({ limit: "100mb" }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

//  routes
app.get("/", (req, res) => {
  res.send("server running...");
});

app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database", err);
    process.exit(1);
  });
