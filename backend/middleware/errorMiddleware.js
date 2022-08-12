const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // Log to console for developer
  console.log(err.stack.red);
  res.status(500).json({
    success: false,
    error: err.message,
  });
};

export { notFound, errorHandler };
