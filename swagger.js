const swaggerAutogen = require('swagger-autogen')();
const appConfig = require('./config');

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts cse341 first project',
  },
  host: appConfig.host + ':' + appConfig.port,
  basePath: '/api/v1',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
