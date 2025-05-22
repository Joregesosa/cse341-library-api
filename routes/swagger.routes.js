const docRoutes = require('express').Router();
const { serve, setup } = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

docRoutes.use('/', serve);
docRoutes.get(
  '/',
  setup(swaggerDocument, { swaggerOptions: { docExpansion: 'none' } }),
);

module.exports = docRoutes;
