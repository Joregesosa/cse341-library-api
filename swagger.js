const swaggerAutogen = require('swagger-autogen')();
const appConfig = require('./config');

const host =
  appConfig.env === 'production'
    ? appConfig.host
    : appConfig.host + ':' + appConfig.port;

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts cse341 first project',
  },
  host: host,
  basePath: '/api/v1',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
