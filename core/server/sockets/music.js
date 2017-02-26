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

  dbus: undefined,
  socketRespond: undefined,

  setup: function setup(respond) {
    music.dbus = dbusCtrl.setupBus();

    music.socketRespond = respond;

    music.deviceProperties = {};
    music.playerProperties = {};

    music.dbus.handleRootInterfaceEvents(music.eventHandler);
    music.dbus.handleBasePropertyEvents(music.eventHandler);

    music.establishConnection()
      .then( () => music.dbus.getConnectedDevice() )
      .then( device => {
        music.dbus.handleDevicePropertyEvents(device.objectPath, music.eventHandler);
        music.dbus.handlePlayerPropertyEvents(device.player.objectPath, music.eventHandler);
        music.dbus.getProperties(device.objectPath)
          .then( props => {
            console.log('send deviced properties');
            merge(music.deviceProperties, props);
            music.socketRespond( {'channel': channels.music, 'emit': 'music/device', 'content': music.deviceProperties} );
          });
        music.dbus.getPlayerProperties(device.player.objectPath)
          .then( props => {
            music.dbus.play();
            console.log('send player properties');
            merge(music.playerProperties, props);
            music.socketRespond( {'channel': channels.music, 'emit': 'music/player', 'content': music.playerProperties} );
          });
      })
      .catch( err => {} );
  },

  // connect 
  establishConnection: function establishConnection( ) {
    return new Promise(function (resolve, reject) {
      music.dbus.getPairedDevices()
        .then( devices => {
          // console.log(devices); resolve(devices);
          device = devices.filter( dev => dev.properties.Address === '70:70:0D:70:97:EC' );
          if ( device.length > 0 ) {
            // console.log('found device', device[0]);
            return music.dbus.connect(device[0].objectPath);
          }
        })
        .then( device => resolve(device) )
        .catch( err => console.log(err) );
    });
  },

  eventHandler: function eventHandler( event ) {
    // console.log(event.event);
    switch(event.event) {
      case 'InterfaceAdded':
        if ( music.dbus.checkDeviceInterface(event.Interface) ) {
          music.dbus.handleDevicePropertyEvents(event.Interface, music.eventHandler);
          return;
        }

        if ( music.dbus.checkPlayerInterface(event.Interface) ) {
          music.dbus.handlePlayerPropertyEvents(event.Interface, music.eventHandler);
          return;
        }
        break;
      case 'InterfaceRemoved':
        break;
      case 'DevicePropertiesChanged':
        console.log('send', event.event);
        merge(music.deviceProperties, event.Properties);
        music.socketRespond( {'channel': channels.music, 'emit': 'music/device', 'content': music.deviceProperties} );
        break;
      case 'PlayerPropertiesChanged':
        console.log('send', event.event);
        merge(music.playerProperties, event.Properties);
        music.socketRespond( {'channel': channels.music, 'emit': 'music/player', 'content': music.playerProperties} );
        break;
    }
  },

  newConnection: function newConnection(socket, data) {
    return new Promise(function (resolve, reject) {

      socket.leave(channels.music);
      socket.join(channels.music);

      console.log('newConnection requested: ', data);
      console.log(music.setup);
    
      music.dbus.getProperties(device.objectPath)
        .then( props => {
          console.log('send deviced properties');
          merge(music.deviceProperties, props);
          music.socketRespond( {'channel': channels.music, 'emit': 'music/device', 'content': music.deviceProperties} );
        });
      music.dbus.getPlayerProperties(device.player.objectPath)
        .then( props => {
          music.dbus.play();
          console.log('send player properties');
          merge(music.playerProperties, props);
          music.socketRespond( {'channel': channels.music, 'emit': 'music/player', 'content': music.playerProperties} );
        });

      resolve();

    });
  },

  play: function play(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('play requested: ', data);
      console.log(music.setup);
      music.dbus.play();

      resolve();

    });
  },

  pause: function pause(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('pause requested: ', data);
      console.log(music.setup);
      music.dbus.pause();

      resolve();

    });
  },

  previous: function previous(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('previous requested: ', data);
      console.log(music.setup);
      music.dbus.previous();

      resolve();

    });
  },

  next: function next(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('next requested: ', data);
      console.log(music.setup);
      music.dbus.next();

      resolve();

    });
  }




  // mac: '70:70:0D:70:97:EC',
  // properties: {},

  // bus: undefined,
  // dbus: undefined,
  // serviceName: 'org.bluez', 
  // objectPath: '/org/bluez/hci0/dev_70_70_0D_70_97_EC', 
  // mediaControlInterfaceName: 'org.bluez.MediaControl1',
  // mediaPlayerInterfaceName: 'org.bluez.MediaPlayer1',

  // setMac: function setMac(mac) {
  //   console.log('setting mac', mac);
  //   music.mac = mac;
  //   music.objectPath = '/org/bluez/hci0/dev_' + music.mac.split(":").join("_");
  // },

  // newConnection: function newConnection(socket, data) {
  //   return new Promise(function (resolve, reject) {

  //     console.log('music/connected:', data);
  //     socket.leave(channels.music);
  //     socket.join(channels.music);

  //     music.dbus = dbusCtrl.setupBus();

  //     var savedMac = '70:70:0D:70:97:EC';

  //     music.establishConnection(savedMac)
  //       .then( () => {
  //         console.log('playing in 1 sec...');
  //         return new Promise( (resolve, reject) => {
  //           setTimeout( () => resolve(music.play()), 1000); 
  //         });
  //       })
  //       .then( ( response ) => {
  //         resolve( response );
  //       });

  //   });
  // },
    
  // establishConnection: function establishConnection( mac ) {
  //   return new Promise(function (resolve, reject) {

  //     console.log('connecting...');
  //     music.music.dbus.connect(mac)
  //       .then( () => { 
  //       //   console.log('connected'); 
  //       //   return registerEvents();
  //       // })
  //       // .then( () => {
  //         resolve();
  //       })
  //       .catch( (err) => reject(err) );
  //   });
  // },

  // play: function play() {
  //   return new Promise(function (resolve, reject) {
  //     console.log('music/play');
  //     music.music.dbus.play()
  //       .then( () => {
  //         console.log('getting player props');
  //         return music.music.dbus.getPlayerProperties() ;
  //       })
  //       .then( (props) => {
  //         console.log('current player properties:', props);
  //         merge(music.properties, props);
  //         resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
  //       })
  //       .catch( (err) => {} );

  //   });
  // },

  // pause: function pause() {
  //   return new Promise(function (resolve, reject) {
  //     console.log('music/pause');
  //     music.music.dbus.pause()
  //       .then( () => {
  //         console.log('getting player props');
  //         return music.music.dbus.getPlayerProperties() ;
  //       })
  //       .then( (props) => {
  //         console.log('current player properties:', props);
  //         merge(music.properties, props);
  //         resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
  //       })
  //       .catch( (err) => {} );

  //   });
  // },

  // next: function next() {
  //   return new Promise(function (resolve, reject) {
  //     console.log('music/next');
  //     music.music.dbus.next()
  //       .then( () => {
  //         console.log('getting player props');
  //         return music.music.dbus.getPlayerProperties() ;
  //       })
  //       .then( (props) => {
  //         console.log('current player properties:', props);
  //         merge(music.properties, props);
  //         resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
  //       })
  //       .catch( (err) => {} );

  //   });
  // },

  // previous: function previous() {
  //   return new Promise(function (resolve, reject) {
  //     console.log('music/previous');
  //     music.music.dbus.previous()
  //       .then( () => {
  //         console.log('getting player props');
  //         return music.music.dbus.getPlayerProperties() ;
  //       })
  //       .then( (props) => {
  //         console.log('current player properties:', props);
  //         merge(music.properties, props);
  //         resolve( {'channel': channels.music, 'emit': 'music/properties', 'content': music.properties} );
  //       })
  //       .catch( (err) => {} );

  //   });
  // },

  // enablePulseaudio: function enablePulseaudio( next ) {
  //   return new Promise(function (resolve, reject) {
  //     var cmd = 'pulseaudio --start';

  //     exec(cmd, function(error, stdout, stderr) {
  //       console.log(error, stdout, stderr);
        
  //       bluetooth.connectDevice({}, '70:70:0D:70:97:EC')
  //         .then( () => {
  //           return next;
  //         })
  //         .then( (response) => {
  //           resolve(response);
  //         });
  //     });
  //   });
  // },
};

module.exports = music;