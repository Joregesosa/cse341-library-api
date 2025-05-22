const dotenv = require('dotenv');

dotenv.config();

const appConfig = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV || 'development',
  db: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
};

module.exports = appConfig;
