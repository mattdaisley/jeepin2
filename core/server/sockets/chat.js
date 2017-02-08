// # API routes
var senseHat        = require('../senseHat'),
    defaultRoomId   = 1,
    io,
    socketListeners;

setupMiddleware = function setupMiddleware(serverIO) {
    io = serverIO;
    io.on('connection', socketListeners);

    readSensors();
}

socketListeners = function socketListeners(socket) {

    socket.on('disconnect', function(data){
        io.in(defaultRoomId).emit('disconnect', data);
    });

    socket.on('new connection', function(data) {
        console.log('new connection: ', data);
        socket.leave(defaultRoomId);
        socket.join(defaultRoomId);
        
        io.in(defaultRoomId).emit('message', {content: {'pitch':'Welcome to the room'}});

    });

    socket.on('add-message', function(data) {
        // console.log('add-message:', data);
        io.in(defaultRoomId).emit('message', {content:data});

    });
};

readSensors = function readSensors() {
  var options = {};
  senseHat.pollOrientation(options, onResult, onError);
};

onResult = function onResult( result ) {
  var pitch = parseFloat(result.pitch), 
      roll  = parseFloat(result.roll);

  if ( pitch > 180 ) pitch = pitch - 360;
  if ( roll > 180 ) roll = roll - 360;

  var response = {'pitch':pitch, 'roll':roll};
  io.in(defaultRoomId).emit('message', {content:response});
};

onError = function onError( error ) {
  console.log(error);
}

module.exports = setupMiddleware;
