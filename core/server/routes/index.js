var tileServer = require('./tile-server');
var config		 = require('../config');

module.exports = {
    tileServer: tileServer,
    tileServerBaseUri: config.tileServerBaseUri
};
