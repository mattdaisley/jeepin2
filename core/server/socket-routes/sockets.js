// # API routes
var sockets        = require('../sockets'),
  defaultRoomId   = 1,
  io,
  socketListeners;

setupMiddleware = function setupMiddleware(serverIO) {
  io = serverIO;
  io.on('connection', socketListeners);

  sockets.poll(io, sockets.gyro.pollSensor);
  sockets.poll(io, sockets.music.pollMusic);
  setTimeout( function() { sockets.poll(io, sockets.bluetooth.pollDevices); }, 12000); //delay to allow pulseaudio to start
}

socketListeners = function socketListeners(socket) {
  console.log('new connection. setting up socket listeners');

  socket.on('disconnect', function(data) {console.log('disconnect', data); });

  socket.on('gyro/connected', sockets.handle(io, socket, sockets.gyro.newConnection));
  socket.on('gyro/disconnect', sockets.handle(io, socket, sockets.gyro.endConnection));

  socket.on('bluetooth/connected', sockets.handle(io, socket, sockets.bluetooth.newConnection));
  socket.on('bluetooth/disconnect', sockets.handle(io, socket, sockets.bluetooth.endConnection));
  socket.on('bluetooth/device/connect', sockets.handle(io, socket, sockets.bluetooth.connectDevice));
  socket.on('bluetooth/device/disconnect', sockets.handle(io, socket, sockets.bluetooth.disconnectDevice));

  socket.on('music/setup', function() { sockets.poll(io, sockets.music.pollMusic); });

  // socket.on('add-message', function(data) {
  //   // console.log('add-message:', data);
  //   io.in(defaultRoomId).emit('message', {content:data});

  // });
};

module.exports = setupMiddleware;
