// # API routes

var DBus      = require('dbus'),
  merge       = require('merge'),
  exec        = require('child_process').exec,
  // sockets     = require('./index'),
  channels    = require('./channels'),
  bluetooth   = require('./bluetooth'),
  music;


music = {

  bus: undefined,
  mac: '70:70:0D:70:97:EC',
  properties: {},

  setMac: function setMac(mac) {
    console.log('setting mac', mac);
    this.mac = mac;
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
    let mac = music.mac.split(":").join("_");

    music.bus.getInterface(
      'org.bluez',
      '/org/bluez/hci0/dev_'+mac,
      'org.bluez.MediaControl1',
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

  play: function play(respond) {
    return new Promise(function (resolve, reject) {
      let mac = music.mac.split(":").join("_");

      music.bus.getInterface(
        'org.bluez',
        '/org/bluez/hci0/dev_' + mac,
        'org.bluez.MediaControl1',
        function( err, iface ) {
          //console.log(iface);
          //console.log("\n");
          iface.Play('', function(err, result) {
            if (err) {
              //bus.disconnect( enablePulseaudio );
              //bus = DBus.getBus('system');
              music.enablePulseaudio( respond );
              return console.log(err);
            }
            bus.disconnect();
            blue.disconnect();
            respond( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
          });
        }

      );

    });
  },

  enablePulseaudio: function enablePulseaudio( respond ) {
    var cmd = 'pulseaudio --start';

    exec(cmd, function(error, stdout, stderr) {
      // command output is in stdout
      console.log(error, stdout, stderr);
      //bus.reconnect();
      //bus = DBus.getBus('system');
      music.play(respond);
      bluetooth.connectDevice({}, '70:70:0D:70:97:EC');
    });
  },
};

module.exports = music;