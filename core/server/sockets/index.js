// # Ghost Data API
// Provides access from anywhere to the Ghost data layer.
//
// Ghost's JSON API is integral to the workings of Ghost, regardless of whether you want to access data internally,
// from a theme, an app, or from an external app, you'll use the Ghost JSON API to do so.

var _             = require('lodash'),
  gyro            = require('./gyro'),
  bluetooth       = require('./bluetooth'),
  music           = require('./music'),

  handle;

/**
 * ### HTTP
 *
 * description
 *
 * @public
 * @param {Function} 
 * @return {Function}
 */
handle = function handle( io, socket, socketMethod, next ) {

  return function socketsHandler(data) {

    return socketMethod(socket, data)
      .then(function (response) {
        console.log('io.in('+response.channel+').emit('+response.emit+', {content: response.content});');
        io.in(response.channel).emit(response.emit, {content: response.content});
      }).catch(function (error) {
      // To be handled by the API middleware
      console.log(error);
      next(error);
    });
  };
};

poll = function poll( io, socketMethod, next ) {
  
  function respond(response) {
    // console.log('io.in('+response.channel+').emit('+response.emit+', {content: response.content});');
    io.in(response.channel).emit(response.emit, {content: response.content});
  }

  return new Promise(function (resolve, reject) {
    socketMethod(respond);
  });
}

/**
 * ## Public API
 */
module.exports = {
  // Extras
  handle: handle,
  poll: poll,
  gyro: gyro,
  bluetooth: bluetooth,
  music: music
};