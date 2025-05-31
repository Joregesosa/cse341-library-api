const { Router } = require('express');

const appRouter = Router();

function router(app) {
  app.use('/api/v1', appRouter);

  appRouter.use(
    '/api-docs',
    require('./swagger.routes'),
    /* #swagger.ignore = true */
  );
  appRouter.use('/auth', require('./auth.routes'));
  appRouter.use('/books', require('./book.routes'));
}

module.exports = router;
