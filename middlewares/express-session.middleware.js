const session = require('express-session');
const appConfig = require('../config');

const sessionMiddleware = session({
  secret: appConfig.jwt.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: appConfig.env === 'production', // Requiere HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: appConfig.env === 'production' ? 'none' : 'lax', // 'none' solo en producción
    domain:
      appConfig.env === 'production'
        ? 'https://cse341-library-api-wlf4.onrender.com'
        : undefined, // Ajusta según tu dominio
  },
  proxy: appConfig.env === 'production', // Importante si estás detrás de un proxy
});

module.exports = sessionMiddleware;
