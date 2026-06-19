import express from "express";
import {
  authStatus,
  loginUser,
  logoutUser,
  registerUser,
  reset2FA,
  TwoFASetup,
  verify2FA,
} from "../controllers/userController.js";
import passport from "passport";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();

//Registration route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

// Logout Route
router.post("/logout", checkAuth, logoutUser);

// Auth status route
router.get("/status", checkAuth, authStatus);

// 2FA setup route
router.post("/2fa/setup", checkAuth, TwoFASetup);

// 2FA verify route
router.post("/2fa/verify", checkAuth, verify2FA);

// 2FA reset route
router.post("/2fa/reset", checkAuth, reset2FA);

export default router;
