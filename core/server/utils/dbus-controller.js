

var DBus      = require('dbus'),
  merge       = require('merge'),
  exec        = require('child_process').exec,
  xml_to_json = require('xmljson').to_json,
  ctrl;


ctrl = {

  setupBus: function setupBus() {
    ctrl.bus                = DBus.getBus('system');

    ctrl.listeners          = [];

    // service
    ctrl.serviceName        = 'org.bluez';

    // objects
    ctrl.rootObjectPath     = '/'
    ctrl.baseObjectPath     = '/org/bluez/hci0';

    // interfaces
    ctrl.objectManagerIface = 'org.freedesktop.DBus.ObjectManager';

    ctrl.mediaControlIface  = 'org.bluez.MediaControl1';
    ctrl.mediaPlayerIface   = 'org.bluez.MediaPlayer1';
    ctrl.deviceIface        = 'org.bluez.Device1';

    ctrl.propsIface         = 'org.freedesktop.DBus.Properties';
    ctrl.introspectIface    = 'org.freedesktop.DBus.Introspectable';

    return ctrl;
  },

  getConnectedDevice: function getConnectedDevice() {
    return new Promise((resolve, reject) => {
      ctrl.getPairedDevices()
        .then( devices => ctrl.filterConnectedDevice(devices) )
        .then( device  => ctrl.setDevicePlayerObject(device) )
        .then( device  => resolve(device) )
        .catch( (err) => reject(err) );
    });
  },

  getPairedDevices: function getPairedDevices() {
    return new Promise((resolve, reject) => {
      ctrl.introspect(ctrl.baseObjectPath)
        .then( devices => ctrl.setDevicesProperties(devices) )
        .then( devices => resolve(devices) )
        .catch( (err) => reject(err) );
    });
  },

  setDevicesProperties: function setDevicesProperties( devices ) {

    let promises = [];
      
    Object.keys(devices.node.node).forEach( (key) => {
      let p = new Promise((resolve, reject) => {
        let device = {
          objectPath: ctrl.baseObjectPath + '/' + devices.node.node[key].$.name
        };
        ctrl.getProperties( device.objectPath )
          .then( (props) => {
            device.properties = props;
            resolve(device);
          });
      });
      promises.push(p);
    });

    return Promise.all(promises);
  },

  filterConnectedDevice: function filterConnectedDevice( devices ) {
    return new Promise((resolve, reject) => {
      let connectedDevices = devices.filter( device => device.properties.Connected === true );
      if ( connectedDevices.length > 0 ) {
        resolve(connectedDevices[0]);
      } else {
        reject(new Error('no connected devices'));
      }
    });
  },

  setDevicePlayerObject: function setDevicePlayerObject( device ) {
    return new Promise((resolve, reject) => {
      ctrl.introspect(device.objectPath)
        .then( obj => {

          Object.keys(obj.node.node).forEach( (key) => {

            let object = obj.node.node[key].$;
            if ( object.name.indexOf('player') === 0 ) {

              device.player = {
                name: object.name,
                objectPath: device.objectPath + '/' + object.name
              };

              resolve(device);
              return;
            }

          });

        })
    });
  },

  getPlayerProperties: function getPlayerProperties( objectPath, interface ) {
    return new Promise((resolve, reject) => {
      // let objectPath = device.objectPath;
      // console.log('in getPlayerProperties', ctrl.serviceName, objectPath, ctrl.propsIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        objectPath,
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

  getObjects: function getObjects( ) {
    return new Promise((resolve, reject) => {
      // console.log(ctrl.serviceName, ctrl.rootObjectPath, ctrl.objectManagerIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        ctrl.rootObjectPath,
        ctrl.objectManagerIface,
        (err, iface) => {

          if ( err ) { 
            console.log('getObjects err 1:', err); 
            reject(err);
            return;
          }

          iface.GetManagedObjects( (err, objs) => {

            if ( err ) { 
              console.log('getObjects err 2:', err); 
              reject(err);
              return;
            }

            resolve(objs);
          });

        }
      );

    });
  },


  // promise based interaction with methods
  introspect: function introspect( objectPath ) {
    return new Promise((resolve, reject) => {
      // objectPath = ( objectPath.length > 0 ) ? (ctrl.baseObjectPath + '/' + objectPath) : ctrl.baseObjectPath;

      // console.log(ctrl.serviceName, objectPath, ctrl.introspectIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        objectPath,
        ctrl.introspectIface,
        (err, iface) => {

          if ( err ) { 
            console.log('introspect err 1:', err); 
            reject(err);
            return;
          }

          iface.Introspect( (err, introspect) => {

            if ( err ) { 
              console.log('introspect err 2:', err); 
              reject(err);
              return;
            }
    
            xml_to_json(introspect, (err, obj) => resolve(obj));
          });

        }
      );

    });
  },

  getProperties: function getProperties( objectPath ) {
    return new Promise((resolve, reject) => {

      // console.log('in getProperties', ctrl.serviceName, objectPath, ctrl.deviceIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        objectPath,
        ctrl.deviceIface,
        (err, iface) => {

          if ( err ) { 
            console.log('getProperties err 1:', err); 
            reject(err);
            return;
          }

          iface.getProperties( (err, props) => {

            if ( err ) { 
              console.log('getProperties err 2:', err); 
              reject(err);
              return;
            }

            resolve(props);
          });

        }
      );

    });
  },

  connect: function connect( objectPath ) {
    return new Promise((resolve, reject) => {

      // console.log(ctrl.serviceName, ctrl.deviceObjectPath, ctrl.deviceIface);
      ctrl.bus.getInterface(
        ctrl.serviceName,
        objectPath,
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

                resolve();

              });
            }, 1000);
            
          });

        }
      );

    });
  },

  disconnect: function disconnect() {
    return new Promise((resolve, reject) => {

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

  play: function play() {
    return new Promise((resolve, reject) => {
      ctrl.getConnectedDevice()
        .then( device => {
          // console.log(ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface);
          ctrl.bus.getInterface( ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface,
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
        })
        .catch( err => console.log(err) );
    });
  },

  pause: function pause() {
    return new Promise((resolve, reject) => {
      ctrl.getConnectedDevice()
        .then( device => {
          // console.log(ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface);
          ctrl.bus.getInterface( ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface,
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
        })
        .catch( err => console.log(err) );
    });
  },

  next: function next() {
    return new Promise((resolve, reject) => {
      ctrl.getConnectedDevice()
        .then( device => {
          // console.log(ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface);
          ctrl.bus.getInterface( ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface,
            (err, iface) => {

              if ( err ) { 
                console.log('next err 1:', err); 
                reject(err);
                return;
              }
              
              iface.Next( '', (err, response) => {

                if ( err ) { 
                  console.log('next err 2:', err); 
                  reject(err);
                  return;
                }
                
                resolve();
              });

            }
          );
        })
        .catch( err => console.log(err) );
    });
  },

  previous: function previous() {
    return new Promise((resolve, reject) => {
      ctrl.getConnectedDevice()
        .then( device => {
          // console.log(ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface);
          ctrl.bus.getInterface( ctrl.serviceName, device.player.objectPath, ctrl.mediaPlayerIface,
            (err, iface) => {

              if ( err ) { 
                console.log('previous err 1:', err); 
                reject(err);
                return;
              }
              
              iface.Previous( '', (err, response) => {

                if ( err ) { 
                  console.log('previous err 2:', err); 
                  reject(err);
                  return;
                }
                
                resolve();
              });

            }
          );
        })
        .catch( err => console.log(err) );
    });
  },

  
  // bus event wrappers
  handleRootInterfaceEvents: function handleRootInterfaceEvents( callback ) {
    if ( ctrl.listeners.indexOf(ctrl.rootObjectPath) !== -1 ) return;
    ctrl.listeners.push(ctrl.rootObjectPath);
    ctrl.bus.getInterface(
      ctrl.serviceName,
      ctrl.rootObjectPath,
      ctrl.objectManagerIface,
      (err, iface) => {

        if ( err ) { 
          callback(err, undefined);
          return;
        }
        // console.log('setting up InterfacesAdded listener');
        iface.on('InterfacesAdded', (interface) => {
          callback({'event': 'InterfaceAdded', 'Interface': interface});
        });

        // console.log('setting up InterfacesRemoved listener');
        iface.on('InterfacesRemoved', (interface) => {
          callback({'event': 'InterfaceRemoved', 'Interface': interface});
        });

      }
    );
  },

  handleBasePropertyEvents: function handleBasePropertyEvents( callback ) {
    
    if ( ctrl.listeners.indexOf(ctrl.baseObjectPath) !== -1 ) return;
    ctrl.listeners.push(ctrl.baseObjectPath);
    ctrl.bus.getInterface(
      ctrl.serviceName,
      ctrl.baseObjectPath,
      ctrl.propsIface,
      (err, iface) => {

        if ( err ) { 
          callback(err, undefined);
          return;
        }
        
        // console.log('setting up handleBasePropertyEvents PropertiesChanged listener');
        iface.on('PropertiesChanged', (err, props) => {
          callback(err, {'event': 'BasePropertiesChanged', 'Properties': props});
        });

      }
    );
    
  },

  handleDevicePropertyEvents: function handleDevicePropertyEvents( objectPath, callback ) {
    // let objectPath = ctrl.baseObjectPath + '/' + device.objectPath;
    
    if ( ctrl.listeners.indexOf(objectPath) !== -1 ) return;
    ctrl.listeners.push(objectPath);
    ctrl.bus.getInterface(
      ctrl.serviceName,
      objectPath,
      ctrl.propsIface,
      (err, iface) => {

        if ( err ) { 
          callback(err, undefined);
          return;
        }
        
        // console.log('setting up handleDevicePropertyEvents PropertiesChanged listener');
        iface.on('PropertiesChanged', (err, props) => {
          callback({'event': 'DevicePropertiesChanged', 'Properties': props});
        });

      }
    );
    
  },

  handlePlayerPropertyEvents: function handlePlayerPropertyEvents( objectPath, callback ) {
    
    if ( ctrl.listeners.indexOf(objectPath) !== -1 ) return;
    ctrl.listeners.push(objectPath);
    // console.log(ctrl.serviceName, objectPath, ctrl.propsIface);
    ctrl.bus.getInterface(
      ctrl.serviceName,
      objectPath,
      ctrl.propsIface,
      (err, iface) => {

        if ( err ) { 
          callback(err, undefined);
          return;
        }
        
        // console.log('setting up handlePlayerPropertyEvents PropertiesChanged listener');
        iface.on('PropertiesChanged', (err, props) => {
          callback({'event': 'PlayerPropertiesChanged', 'Properties': props});
        });

      }
    );
    
  },

  // interface regex max functions 

  checkDeviceInterface: function checkDeviceInterface( interface ) {
    let pattern = /^(\/(org)\/(bluez)\/(hci0)\/dev(_[\dA-Z]{2}){6})$/g;
    return pattern.test(interface);
  },

  checkPlayerInterface: function checkPlayerInterface( interface ) {
    let pattern = /^(\/(org)\/(bluez)\/(hci0)\/dev(_[\dA-Z]{2}){6})(\/player)/g;
    return pattern.test(interface);
  },

}

module.exports = ctrl;