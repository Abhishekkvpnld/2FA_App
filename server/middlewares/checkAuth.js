export const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({
      error: true,
      success: false,
      message: "unauthorized user",
    });
  }
};
