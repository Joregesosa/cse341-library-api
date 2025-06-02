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
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir todas las solicitudes CORS
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    next();
  })
  .use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] }))
  .use(cors({ origin: '*' }));

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
