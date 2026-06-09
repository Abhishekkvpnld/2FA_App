import express from "express";
import {
  authStatus,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import passport from "passport";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();

//Registration route
router.post("/register", registerUser);

// Login Route
router.post("/login", passport.authenticate("local"), loginUser);

// Logout Route
router.post("/logout", checkAuth, logoutUser);

// Auth status route
router.get("/status", checkAuth, authStatus);

// 2FA setup route
router.post("/2fa/setup",checkAuth, )
// 2FA verify route
// 2FA reset route

export default router;
