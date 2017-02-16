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

      resolve( {'channel': channels.music, 'emit': 'music/devices', 'content': this.devices} );

    });
  },

  pollMusic: function pollMusic(respond) {
    console.log('setting up music');
    if ( this.mac ) {
      this.setupDBus(respond);
    }

  },

  setupDBus: function setupDBus(respond) {

    if ( this.bus && this.bus.connection ) this.bus.disconnect();
    this.bus = DBus.getBus('system');

    this.setupDBusPropertyListener(respond);
  },

  setupDBusPropertyListener: function setupDBusPropertyListener(respond) {
    let mac = this.mac.split(":").join("_");

    this.bus.getInterface(
      'org.bluez',
      '/org/bluez/hci0/dev_'+mac+'/player0',
      'org.bluez.MediaPlayer1',
      ( err, iface ) => {

        iface.getProperties( ( err, props ) => {
          console.log('org.bluez.MediaPlayer1 props:');
          console.log(props);
          merge(properties, props);
          respond( {'channel': channels.music, 'emit': 'music/properties', 'content': this.properties} );

        });

        iface.on('PropertiesChanged', ( err, props ) => {
          console.log('org.freedesktop.DBus.Properties PropertiesChanged');
          console.log(props);
          merge(properties, props);
          respond( {'channel': channels.music, 'emit': 'music/properties', 'content': this.properties} );
        });


      }
    );
  }
};

module.exports = music;