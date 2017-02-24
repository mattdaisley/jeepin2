// # API routes

var DBus      = require('dbus'),
  merge       = require('merge'),
  exec        = require('child_process').exec,
  // sockets     = require('./index'),
  channels    = require('./channels'),
  bluetooth   = require('./bluetooth'),
  dbusCtrl    = require('../utils/dbus-controller'),
  music;


music = {

  mac: '70:70:0D:70:97:EC',
  properties: {},

  bus: undefined,
  dbus: undefined,
  serviceName: 'org.bluez', 
  objectPath: '/org/bluez/hci0/dev_70_70_0D_70_97_EC', 
  mediaControlInterfaceName: 'org.bluez.MediaControl1',
  mediaPlayerInterfaceName: 'org.bluez.MediaPlayer1',

  setMac: function setMac(mac) {
    console.log('setting mac', mac);
    music.mac = mac;
    music.objectPath = '/org/bluez/hci0/dev_' + music.mac.split(":").join("_");
  },

  newConnection: function newConnection(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('music/connected:', data);
      socket.leave(channels.music);
      socket.join(channels.music);

      music.dbus = dbusCtrl.setupBus();

      var savedMac = '70:70:0D:70:97:EC';

      music.establishConnection(savedMac)
        .then( () => {
          console.log('playing in 1 sec...');
          return new Promise( (resolve, reject) => {
            setTimeout( () => resolve(music.play()), 1000); 
          });
        })
        .then( ( response ) => {
          resolve( response );
        });

    });
  },
    
  establishConnection: function establishConnection( mac ) {
    return new Promise(function (resolve, reject) {

      console.log('connecting...');
      music.dbus.connect(mac)
        .then( () => { 
        //   console.log('connected'); 
        //   return registerEvents();
        // })
        // .then( () => {
          resolve();
        })
        .catch( (err) => reject(err) );
    });
  },

  play: function play() {
    return new Promise(function (resolve, reject) {
      console.log('music/play');
      music.dbus.play()
        .then( () => {
          console.log('getting player props');
          return music.dbus.getPlayerProperties() ;
        })
        .then( (props) => {
          console.log('current player properties:', props);
          merge(music.properties, props);
          resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
        })
        .catch( (err) => {} );

    });
  },

  pause: function pause() {
    return new Promise(function (resolve, reject) {
      console.log('music/pause');
      music.dbus.pause()
        .then( () => {
          console.log('getting player props');
          return music.dbus.getPlayerProperties() ;
        })
        .then( (props) => {
          console.log('current player properties:', props);
          merge(music.properties, props);
          resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
        })
        .catch( (err) => {} );

    });
  },

  enablePulseaudio: function enablePulseaudio( next ) {
    return new Promise(function (resolve, reject) {
      var cmd = 'pulseaudio --start';

      exec(cmd, function(error, stdout, stderr) {
        console.log(error, stdout, stderr);
        
        bluetooth.connectDevice({}, '70:70:0D:70:97:EC')
          .then( () => {
            return next;
          })
          .then( (response) => {
            resolve(response);
          });
      });
    });
  },
};

module.exports = music;