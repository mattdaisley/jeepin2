var express     = require('express'),
    AppServer 	= require('./app-server');

function init(options) {
    var appServer = null;

    // ### Initialisation
    // The server and its dependencies require a populated config
    // It returns a promise that is resolved when the application
    // has finished starting up.

    // Get reference to an express app instance.

    return new Promise(function (resolve) {
	    var parentApp = express();

	    appServer = new AppServer(parentApp);
		resolve(appServer);
    });
}

module.exports = init;