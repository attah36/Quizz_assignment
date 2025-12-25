module.exports = (err, req, res, next) => {
  res.status(err.status || 500).json({
    error: true,
    message: err.message || "Server error",
    status: err.status || 500
  });
};
