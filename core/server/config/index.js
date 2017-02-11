var path          	= require('path'),
  config 			= {};

config.web = {};
config.db = {};

config.appRoot      = path.resolve(__dirname, '../../../');
config.corePath     = path.resolve(config.appRoot + '/core');

config.apiBaseUri   = '/api/v0.1/';

config.jwtSecret    = 'mattAppSuperSecret';

config.lifxSecret   = 'c5c17322f3fbda24bbee417dd7882d70cb2654593088fdbfcab22e8fd06641b0';

process.env.TZ = 'UTC';

switch ( process.env.NODE_ENV ) {
  // dev overrides for configuration values
  case 'dev':

    config.web.port = 7768;
    config.web.host = '127.0.0.1';

    config.db.host = "useast-mysql-test.cjxfiley5kef.us-east-1.rds.amazonaws.com";
    config.db.user = "mattdaisleyadm";
    config.db.password = "ADM.Bodyeye803290.DB";
    config.db.database = "mdaisleydata";

    config.appUrl = 'http://' + config.web.host + ':' + config.web.port;

    break;
  default:

    config.web.port = 8000;
    config.web.host = '172.31.25.198';

    config.db.host = "useast-mysql-test.cjxfiley5kef.us-east-1.rds.amazonaws.com";
    config.db.user = "mattdaisleyadm";
    config.db.password = "ADM.Bodyeye803290.DB";
    config.db.database = "mdaisleydata";

    config.appUrl = 'https://www.mattdaisley.com/';

    break;
}

module.exports = config;

//EAAH5UYZBm5uQBAGyNRq9hZAYX7TBDGdxoteNzJbv9pL7wCRHRVA6lCnogl3ntN8gBmasUZBAIxZBXGCtc7ERuebLjxUrVouiBw6tBK0dSTexYsOtO0IcrgPwv1G9eBTtGDZCRAvbmeOwor8V2hbkwRXWxxbgyyyYQB9kzh3vX4gZDZD