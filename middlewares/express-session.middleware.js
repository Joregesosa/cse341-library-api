const session = require('express-session');
const appConfig = require('../config');

const sessionMiddleware = session({
  secret: appConfig.jwt.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000,
  },
});

module.exports = sessionMiddleware;
