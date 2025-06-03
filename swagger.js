const swaggerAutogen = require('swagger-autogen')();
const appConfig = require('./config');

const host =
  appConfig.env === 'production'
    ? appConfig.host
    : appConfig.host + ':' + appConfig.port;

const doc = {
  info: {
    title: 'Library API',
    description: 'API documentation for the Library application',
  },
  host: host,
  basePath: '/',
  schemes: ['https', 'http'],
  //oauth github
  securityDefinitions: {
    oauth2: {
      type: 'oauth2',
      flow: 'implicit',
      authorizationUrl: 'https://github.com/login/oauth/authorize',
      scopes: {
        'user:email': 'Read user email address',
      },
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
