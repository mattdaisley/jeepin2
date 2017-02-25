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
  sockets.poll(io, sockets.music.setup);
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

  socket.on('music/connected', sockets.handle(io, socket, sockets.music.newConnection));
  socket.on('music/setup', function() { sockets.poll(io, sockets.music.pollMusic); });
  socket.on('music/play', sockets.handle(io, socket, sockets.music.play));
  socket.on('music/pause', sockets.handle(io, socket, sockets.music.pause));
  socket.on('music/next', sockets.handle(io, socket, sockets.music.next));
  socket.on('music/previous', sockets.handle(io, socket, sockets.music.previous));

  // socket.on('add-message', function(data) {
  //   // console.log('add-message:', data);
  //   io.in(defaultRoomId).emit('message', {content:data});

  // });
};

module.exports = setupMiddleware;
