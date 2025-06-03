const session = require('express-session');
const appConfig = require('../config');

const sessionMiddleware = session({
  secret: appConfig.jwt.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: appConfig.env === 'production', // Esto requiere HTTPS
    httpOnly: true, // Añadir esta línea para seguridad
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'none', // Cambiar a 'none' para permitir cookies en redirecciones cross-origin
    // domain: '.tudominio.com', // Descomentar y configurar en producción
  },
});
console.log(
  'Env:',
  appConfig.env === 'production' ? 'Production' : 'Development',
);
module.exports = sessionMiddleware;
