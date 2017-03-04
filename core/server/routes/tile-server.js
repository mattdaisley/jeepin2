// # API routes
var express     = require('express'),
    tileServer  = require('../tile-server'),
    tileServerRoutes;

tileServerRoutes = function tileServerRoutes(middleware) {
    var router = express.Router();
    
    router.get(/^\/(\d+)\/(\d+)\/(\d+).pbf$/, tileServer.http.getTile());

    return router;
};

module.exports = tileServerRoutes;
