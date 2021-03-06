var bodyParser      = require('body-parser'),
  express           = require('express'),
  config 			      = require('../config'),
  routes            = require('../routes'),
  errors 			      = require('../errors'),
  cors              = require('cors'),

  middleware,
  setupMiddleware;

setupMiddleware = function setupMiddleware(app) {
  middleware = {};
  
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  app.use('/', express.static(config.corePath + '/client/dist'));

  app.use(cors());

  app.use(routes.tileServerBaseUri, routes.tileServer(middleware));
  
  // app.enable('trust proxy');
  // app.use(checkSSL);

  // ### Routing
  // Set up API routes
  // app.use(routes.apiBaseUri, routes.api(middleware));

  // catch 404 and forward to error handler
  app.use(errors.error404);
};

module.exports = setupMiddleware;