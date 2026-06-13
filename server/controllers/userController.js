import User from "./../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy";
import qrcode from "qrcode";

//Register
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // user registration logic
    const hashePassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashePassword,
      isMFAEnabled: false,
    });
    await newUser.save();
    res.status(201).json({
      error: false,
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      success: false,
      message: err.message || "Failed to register user",
    });
    console.log("Registration error:", err);
  }
};

// Login
export const loginUser = async (req, res) => {
  res.status(200).json({
    error: false,
    success: true,
    message: "User logged in successfully",
    isMFAEnabled: req.user.isMFAEnabled,
    username: req.user.username,
  });
};

// Logout
export const logoutUser = async (req, res) => {
  console.log("Logout req.user is:", req.user);

  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "User is not logged in",
    });
  }

  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to logout user",
      });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to destroy session",
        });
      }

      res.clearCookie("connect.sid");

      console.log("✅ User logged out successfully");

      return res.status(200).json({
        success: true,
        message: "User logged out successfully",
      });
    });
  });
};

// Auth status
export const authStatus = async (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      success: true,
      message: "user authenticated",
      username: req.user.username,
      isMFAEnabled: req.user.isMFAEnabled,
    });
  } else {
    res.status(401).json({
      error: true,
      success: false,
      message: "Unauthorized user",
    });
  }
};

// 2FA setup
export const TwoFASetup = async (req, res) => {
  try {
    const user = req.user;
    console.log("req.user is", user);
    const secret = speakeasy.generateSecret();

    user.twoFactorSecret = secret.base32;

    user.isMFAEnabled = true;
    await user.save();

    const url = speakeasy.otpauthURL({
      secret: secret.base32,
      label: `${req.user.username}`,
      issuer: "MFA Demo App",
      encoding: "base32",
    });

    const qrImageUrl = await qrcode.toDataURL(url);

    res.status(200).json({
      error: false,
      success: true,
      message: "2FA setup successful",
      secret: secret.base32,
      qrCode: qrImageUrl,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      success: false,
      message: err.message || "Failed to setup 2FA",
    });
    console.log("2FA setup error:", err);
  }
};

// 2FA verify
export const verify2FA = async (req, res) => {
  try {
    const { token } = req.body;
    const user = req.user;

    const Isverified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base64",
      token,
    });

    if (Isverified) {
      const jwtToken = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
      );
      res.status(200).json({
        error: false,
        success: true,
        message: "2FA verification successful",
        token: jwtToken,
      });
    } else {
      res.status(400).json({
        error: true,
        success: false,
        message: "Invalid 2FA token",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: true,
      success: false,
      message: err.message || "Failed to verify 2FA",
    });
    console.log("2FA verification error:", err);
  }
};

// 2FA reset
export const reset2FA = async (req, res) => {
  try {
    const user = req.user;
    user.twoFactorSecret = null;
    user.isMFAEnabled = false;

    await user.save();

    res.status(200).json({
      error: false,
      success: true,
      message: "2FA reset successful",
    }); 
  } catch (err) {
    res.status(500).json({
      error: true,
      success: false,
      message: err.message || "Failed to reset 2FA",
    });
    console.log("2FA reset error:", err);
  }
};
