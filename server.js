const express = require('express');
const router = require('./routes');
const dbConn = require('./config/db');
const appConfig = require('./config');
const passport = require('./config/passport');
const cors = require('cors');
const routeNotFoundMiddleware = require('./middlewares/routeNotFound.middleware');
const {
  joiErrorMiddleware,
  notFoundErrorMiddleware,
  generalErrorMiddleware,
} = require('./middlewares/error.middleware');

dbConn(); // Connect to the database

const app = express();

// Configurar CORS antes de cualquier middleware de ruta
app
  .use(express.json())
  .use(require('./middlewares/express-session.middleware'))
  .use(passport.initialize())
  .use(passport.session())
  .use(
    cors({
      origin:
        appConfig.env === 'production'
          ? 'https://cse341-library-api-wlf4.onrender.com' // Cambia esto a tu dominio real
          : 'http://localhost:3000', // O el origen que uses en desarrollo
      credentials: true, // CRÍTICO: permite enviar cookies cross-origin
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    }),
  );

//app.use(express.urlencoded({ extended: true }));

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
