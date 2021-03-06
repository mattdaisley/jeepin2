var 
  config          = require('../config'),
  errors          = require('../errors'),
  merge           = require('merge'),
  util;


util = {

  merge: merge,

  nextPageLink: function nextPageLink(options, docName) {
    var params = {};

    if ( options.query.page_size ) params.page_size = options.query.page_size;
    if ( options.query.page ) {
      params.page = parseInt(options.query.page) + 1;
    } else {
      params.page = 2;
    }

    var query = Object.keys(params)
      .map(function(k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
      .join('&');

    return config.appUrl + config.apiBaseUri + docName + '?' + query;
  },

  getPageOffset: function getPageOffset(options) {
    if ( options.query.page && options.query.page !== 'null' && parseInt(options.query.page) > 0) {
      return this.getPageLimit(options) * ( parseInt(options.query.page) - 1 );
    } else {
      return 0;
    }
  },

  getPageLimit: function getPageLimit(options) {
    if ( 
      options.query.page_size && 
      options.query.page_size !== 'null' && 
      parseInt(options.query.page_size) > 0 &&
      parseInt(options.query.page_size) < 100 
    ) {
      return parseInt(options.query.page_size);
    } else {
      return 100;
    }
  }

};

// make sure all methods can be called by eachother
[
  'nextPageLink',
  'getPageOffset',
  'getPageLimit'
].forEach(function (funcName) {
  util[funcName] = util[funcName].bind(util);
});

module.exports = util;
