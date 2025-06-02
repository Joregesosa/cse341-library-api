const { Router } = require('express');
const {
  isAuthenticated,
  isProfileComplete,
} = require('../middlewares/auth.middleware');

const appRouter = Router();

function router(app) {
  app.use('/', appRouter);

  appRouter.use(
    '/api-docs',
    require('./swagger.routes'),
    /* #swagger.ignore = true */
  );
  appRouter.use('/auth', require('./auth.routes'));
  appRouter.use(
    '/books',
    isAuthenticated,
    isProfileComplete,
    require('./book.routes'),
  );
}

module.exports = router;
