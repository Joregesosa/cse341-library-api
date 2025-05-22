const express = require('express');
const router = require('./routes');
const dbConn = require('./config/db');
const appConfig = require('./config');
const routeNotFoundMiddleware = require('./middlewares/routeNotFound.middleware');
const {
  joiErrorMiddleware,
  notFoundErrorMiddleware,
  generalErrorMiddleware,
} = require('./middlewares/error.middleware');

dbConn(); // Connect to the database

const app = express();

app.use(express.json());

// Rutas
router(app);

// Middleware para capturar rutas no existentes
app.use(routeNotFoundMiddleware);

// Middleware de manejo de errores (en orden)
app.use(joiErrorMiddleware);
app.use(notFoundErrorMiddleware);
app.use(generalErrorMiddleware);

app.listen(appConfig.port, () => {
  console.log(
    `Server is running on http://${appConfig.host}:${appConfig.port}`,
  );
});
