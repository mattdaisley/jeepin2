// # API routes
var sockets        = require('../sockets'),
  defaultRoomId   = 1,
  io,
  socketListeners;

setupMiddleware = function setupMiddleware(serverIO) {
  io = serverIO;
  io.on('connection', socketListeners);

  sockets.poll(io, sockets.gyro.pollSensor);
  sockets.poll(io, sockets.bluetooth.pollDevices);
}

socketListeners = function socketListeners(socket) {

  // socket.on('disconnect', gyro.disconnect);

  socket.on('gyro/connected', sockets.handle(io, socket, sockets.gyro.newConnection));

  // socket.on('add-message', function(data) {
  //   // console.log('add-message:', data);
  //   io.in(defaultRoomId).emit('message', {content:data});

  // });
};

module.exports = setupMiddleware;
