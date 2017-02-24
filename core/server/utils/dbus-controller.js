

var DBus      = require('dbus'),
  merge       = require('merge'),
  exec        = require('child_process').exec,
  ctrl;


ctrl = {

  setupBus: function setupBus() {
    ctrl.bus               = DBus.getBus('system');

    ctrl.serviceName       = 'org.bluez';
    ctrl.objectPathBase    = '/org/bluez/hci0/dev_';
    ctrl.deviceObjectPath  = ctrl.objectPathBase;
    ctrl.playerObjectPath  = ctrl.objectPath + '/player0';

    ctrl.mediaControlIface = 'org.bluez.MediaControl1';
    ctrl.mediaPlayerIface  = 'org.bluez.MediaPlayer1';
    ctrl.deviceIface       = 'org.bluez.Device1';
    ctrl.propsIface        = 'org.freedesktop.DBus.Properties';

    return ctrl;
  },

  // promise based interaction with methods
  connect: function connect(mac) {
    return new Promise(function (resolve, reject) {

      ctrl.deviceObjectPath = ctrl.objectPathBase + mac.split(":").join("_");

      console.log(ctrl.serviceName, ctrl.deviceObjectPath, ctrl.deviceIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        ctrl.deviceObjectPath,
        ctrl.deviceIface,
        (err, iface) => {

          if ( err ) { 
            console.log('connect err:', err); 
            reject(err);
            return;
          }

          exec('pulseaudio --start', (error, stdout, stderr) => {
          
            setTimeout( () => {
              iface.Connect( '', (err, response) => {

                if ( err ) { 
                  console.log('connect err:', err); 
                  reject(err);
                  return;
                }
                
                ctrl.playerObjectPath = ctrl.deviceObjectPath + '/player0';
                resolve();
              });
            }, 1000);
            
          });

        }
      );

    });
  },

  disconnect: function disconnect() {
    return new Promise(function (resolve, reject) {

      ctrl.objectPath = ctrl.objectPathBase + mac.split(":").join("_");

      ctrl.bus.getInterface(
        ctrl.serviceName,
        ctrl.deviceObjectPath,
        ctrl.deviceIface,
        (err, iface) => {

          if ( err ) { 
            console.log('disconnect err 1:', err); 
            reject(err);
            return;
          }
          
          iface.Disconnect( '', (err, response) => {

            if ( err ) { 
              console.log('disconnect err 2:', err); 
              reject(err);
              return;
            }
            
            resolve();
          });

        }
      );

    });
  },

  getPlayerProperties: function getPlayerProperties() {
    return new Promise(function (resolve, reject) {

      console.log(ctrl.serviceName, ctrl.playerObjectPath, ctrl.propsIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        ctrl.playerObjectPath,
        ctrl.mediaPlayerIface,
        (err, iface) => {

          if ( err ) { 
            console.log('getPlayerProperties err 1:', err); 
            reject(err);
            return;
          }

          iface.getProperties( (err, props) => {

            if ( err ) { 
              console.log('getPlayerProperties err 2:', err); 
              reject(err);
              return;
            }

            resolve(props);
          });

        }
      );

    });
  },

  play: function play() {
    return new Promise(function (resolve, reject) {
      console.log(ctrl.serviceName, ctrl.playerObjectPath, ctrl.mediaPlayerIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        ctrl.playerObjectPath,
        ctrl.mediaPlayerIface,
        (err, iface) => {

          if ( err ) { 
            console.log('play err 1:', err); 
            reject(err);
            return;
          }
          
          iface.Play( '', (err, response) => {

            if ( err ) { 
              console.log('play err 2:', err); 
              reject(err);
              return;
            }
            
            resolve();
          });

        }
      );

    });
  },

  pause: function pause() {
    return new Promise(function (resolve, reject) {
      console.log(ctrl.serviceName, ctrl.playerObjectPath, ctrl.mediaPlayerIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        ctrl.playerObjectPath,
        ctrl.mediaPlayerIface,
        (err, iface) => {

          if ( err ) { 
            console.log('pause err 1:', err); 
            reject(err);
            return;
          }
          
          iface.Pause( '', (err, response) => {

            if ( err ) { 
              console.log('pause err 2:', err); 
              reject(err);
              return;
            }
            
            resolve();
          });

        }
      );

    });
  },
  
  // bus event wrappers
  handleDeviceProperties: function handleDeviceProperties( callback ) {
    
    ctrl.bus.getInterface(
      ctrl.serviceName,
      ctrl.deviceObjectPath,
      ctrl.propsIface,
      (err, iface) => {

        if ( err ) { 
          callback(err, undefined);
          return;
        }
        
        iface.on('PropertiesChanged', (err, props) => {
          callback(err, props);
        });

      }
    );
    
  },

  handlePlayerProperties: function handlePlayerProperties( callback ) {

    ctrl.bus.getInterface(
      ctrl.serviceName,
      ctrl.playerObjectPath,
      ctrl.propsIface,
      (err, iface) => {

        if ( err ) { 
          callback(err, undefined);
          return;
        }
        
        iface.on('PropertiesChanged', (err, props) => {
          callback(err, props);
        });

      }
    );
    
  },

}

module.exports = ctrl;