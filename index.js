// # Matt Startup
// Orchestrates the startup of the application when run from command line.

var express,
  mattApp,
  parentApp;

// Proceed with startup
express 	= require('express');
coreApp 	= require('./core');

// Create our parent express app instance.
parentApp = express();

// Call coreApp to get an instance of appServer
coreApp().then(function (appServer) {
  // Mount our app instance on our desired subdirectory path if it exists.
  parentApp.use('/', appServer.rootApp);

  // Let the appServer handle starting our server instance.
  appServer.start(parentApp);
}).catch(function (err) {
  console.log(err);
});
