// # API routes

var DBus      = require('dbus'),
  merge       = require('merge'),
  exec        = require('child_process').exec,
  // sockets     = require('./index'),
  channels    = require('./channels'),
  bluetooth   = require('./bluetooth'),
  music;


music = {

  mac: '70:70:0D:70:97:EC',
  properties: {},

  bus: undefined,
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

      console.log('new music connection: ', data);
      socket.leave(channels.music);
      socket.join(channels.music);

      resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );

    });
  },

  pollMusic: function pollMusic(respond) {
    console.log('setting up music');
    if ( music.mac ) {
      music.setupDBus(respond);
    }

  },

  setupDBus: function setupDBus(respond) {

    if ( music.bus && music.bus.connection ) music.bus.disconnect();
    music.bus = DBus.getBus('system');

    music.setupDBusPropertyListener(respond);
  },

  setupDBusPropertyListener: function setupDBusPropertyListener(respond) {

    music.bus.getInterface(
      music.serviceName, music.objectPath + '/player0',  music.mediaPlayerInterfaceName,
      ( err, iface ) => {

        iface.getProperties( ( err, props ) => {
          console.log('org.bluez.MediaPlayer1 props:');
          console.log(props);
          merge(music.properties, props);
          respond( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );

        });

        iface.on('PropertiesChanged', ( err, props ) => {
          console.log('org.freedesktop.DBus.Properties PropertiesChanged');
          console.log(props);
          merge(music.properties, props);
          respond( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
        });

      }
    );
  },

  play: function play() {
    return new Promise(function (resolve, reject) {

      music.bus.getInterface(
        music.serviceName, music.objectPath,  music.mediaControlInterfaceName,
        ( err, iface ) => {
          iface.Play('', (err, result) => {
            if (err) {
              music.enablePulseaudio( respond, music.play )
                .then( (response) => {
                  resolve(response);
                });
            } else {
              resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
            }
          });
        }

      );

    });
  },

  pause: function pause() {
    return new Promise(function (resolve, reject) {

      music.bus.getInterface(
        music.serviceName, music.objectPath,  music.mediaControlInterfaceName,
        ( err, iface ) => {
          iface.Pause('', (err, result) => {
            if (err) {
              music.enablePulseaudio( respond, music.pause )
                .then( (response) => {
                  resolve(response);
                });
            } else {
              resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
            }
          });
        }

      );

    });
  },

  enablePulseaudio: function enablePulseaudio( respond, next ) {
    return new Promise(function (resolve, reject) {
      var cmd = 'pulseaudio --start';

      exec(cmd, function(error, stdout, stderr) {
        console.log(error, stdout, stderr);
        
        bluetooth.connectDevice({}, '70:70:0D:70:97:EC');

        next()
          .then( (response) => {
            resolve(response);
          });
      });
    });
  },
};

module.exports = music;