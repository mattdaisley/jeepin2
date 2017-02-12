// # API routes
var senseHat      = require('../senseHat'),
  defaultRoomId   = 1,
  io,
  socketListeners,
  
  gyro;


gyro = {
  newConnection: function newConnection(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('new connection: ', data);
      socket.leave(defaultRoomId);
      socket.join(defaultRoomId);

      resolve( {'channel': defaultRoomId, 'emit': 'message', 'content': {'pitch':'Welcome to the room'}} );

    });
  },

  pollSensor: function pollSensor(respond) {
    console.log('in pollSensor');
    let errorCount = 0;

    const RETRY_INTERVAL = 500;
    const RETRY_MAX      = 10;
    
    function pollSensor() {
      var options = {};
      senseHat.pollOrientation(options, pollSuccess, pollFailed);
    }

    function pollSuccess( result ) {
      var pitch = parseFloat(result.pitch), 
          roll  = parseFloat(result.roll),
          result;

      if ( pitch > 180 ) pitch = pitch - 360;
      if ( roll > 180 ) roll = roll - 360;

      result = {'pitch':pitch, 'roll':roll};
      respond( {'channel': defaultRoomId, 'emit': 'gyro/data', 'content': result} );
    };

    function pollFailed( error ) {
      var result,
        retryDelay;
      
      errorCount++;
      if ( errorCount > RETRY_MAX ) errorCount = RETRY_MAX;
      retryDelay = errorCount * RETRY_INTERVAL;

      setTimeout(function() { pollSensor(respond); }, retryDelay);

      result = { 'pitch': 0, 'roll': 0, 'error': { 'errorNum': 1, 'message': error } };
      respond( {'channel': defaultRoomId, 'emit': 'gyro/data', 'content': result} );
    };

    pollSensor();
  }
};

module.exports = gyro;