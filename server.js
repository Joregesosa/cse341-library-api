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
app.set('trust proxy', 1);

// Configurar CORS ANTES de session middleware
app
  .use(express.json())
  .use(
    cors({
      origin:
        appConfig.env === 'production'
          ? 'https://cse341-library-api-wlf4.onrender.com'
          : 'http://localhost:3000',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    }),
  )
  .use(require('./middlewares/express-session.middleware'))
  .use(passport.initialize())
  .use(passport.session());

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
