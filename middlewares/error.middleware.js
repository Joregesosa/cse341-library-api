const joiErrorMiddleware = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json({
      message: 'Validation Error',
      details: err.details,
    });
  }
  next(err);
};

const notFoundErrorMiddleware = (err, req, res, next) => {
  if (err.name === 'NotFoundError' || err.statusCode === 404) {
    return res.status(404).json({
      message: err.message || 'Resource not found',
    });
  }
  next(err);
};

// eslint-disable-next-line no-unused-vars
const generalErrorMiddleware = (err, req, res, next) => {
  console.error('Error:', err);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  });
};

module.exports = {
  joiErrorMiddleware,
  notFoundErrorMiddleware,
  generalErrorMiddleware,
};
