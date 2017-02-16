// # API routes

var DBus      = require('dbus'),
  merge       = require('merge'),
  channels    = require('./channels'),
  music;


music = {

  bus: undefined,
  mac: undefined,
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
      '/org/bluez/hci0/dev_'+mac+'/player0',
      'org.bluez.MediaPlayer1',
      ( err, iface ) => {

        iface.getProperties( ( err, props ) => {
          console.log('org.bluez.MediaPlayer1 props:');
          console.log(props);
          merge(properties, props);
          respond( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );

        });

        iface.on('PropertiesChanged', ( err, props ) => {
          console.log('org.freedesktop.DBus.Properties PropertiesChanged');
          console.log(props);
          merge(properties, props);
          respond( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
        });


      }
    );
  }
};

module.exports = music;