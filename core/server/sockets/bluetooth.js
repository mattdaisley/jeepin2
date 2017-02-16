// # API routes
var blue      = require('bluetoothctl'),
  channels    = require('./channels'),
  music       = require('./music'),
  bluetooth;


bluetooth = {

  devices: [],

  newConnection: function newConnection(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('new bluetooth connection: ', data);
      socket.leave(channels.bluetooth);
      socket.join(channels.bluetooth);

      resolve( {'channel': channels.bluetooth, 'emit': 'bluetooth/devices', 'content': bluetooth.devices} );

    });
  },

  pollDevices: function pollDevices(respond) {
    blue.Bluetooth()

    var hasBluetooth = blue.checkBluetoothController();
    console.log('system has bluetooth controller:' + hasBluetooth);

    if ( hasBluetooth ) {
      blue.on(blue.bluetoothEvents.Device, (devices) => {
        console.log('blue.bluetoothEvents.Device: ');
        console.log(devices);
        bluetooth.devices = devices;
        bluetooth.checkConnectedDevice(devices);

        respond( {'channel': channels.bluetooth, 'emit': 'bluetooth/devices', 'content': bluetooth.devices} );
      });
    } else {
      bluetooth.devices = [
        {
          "mac": "70:70:0D:70:97:EC",
          "name": "test-iPhone",
          "signal": 0,
          "paired": "yes",
          "trusted": "yes",
          "icon": "phone",
          "class": "0x7a020c",
          "blocked": "no",
          "connected": "no",
          "trycount": 0
        },
        {
          "mac": "70:70:0D:70:97:EC",
          "name": "test-iPhone2",
          "signal": 0,
          "paired": "yes",
          "trusted": "yes",
          "icon": "phone",
          "class": "0x7a020c",
          "blocked": "no",
          "connected": "no",
          "trycount": 0
        },
        {
          "mac": "70:70:0D:70:97:EC",
          "name": "test-iPhone3",
          "signal": 0,
          "paired": "yes",
          "trusted": "yes",
          "icon": "phone",
          "class": "0x7a020c",
          "blocked": "no",
          "connected": "no",
          "trycount": 0
        },
        {
          "mac": "70:70:0D:70:97:EC",
          "name": "test-iPhone4",
          "signal": 0,
          "paired": "yes",
          "trusted": "yes",
          "icon": "phone",
          "class": "0x7a020c",
          "blocked": "no",
          "connected": "no",
          "trycount": 0
        },
      ];
      respond( {'channel': channels.bluetooth, 'emit': 'bluetooth/devices', 'content': bluetooth.devices} );
    }

  },

  checkConnectedDevice: function checkConnectedDevice(devices) {
    var connectedDevice = devices.filter( (device) => device.connected === 'yes' );
    console.log('connectedDevice', connectedDevice);
    if ( connectedDevice.lenth > 0 ) {
      music.setMac(connectedDevice[0].mac);
      music.pollMusic();
    }
  },

  connectDevice: function connectDevice(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('new device connection requested for mac: ', data);
      blue.connect(data);

      resolve( {'channel': channels.bluetooth, 'emit': 'bluetooth/devices', 'content': bluetooth.devices} );

    });
  },

  disconnectDevice: function disconnectDevice(socket, data) {
    return new Promise(function (resolve, reject) {

      console.log('new device connection requested for mac: ', data);
      blue.disconnect(data);

      resolve( {'channel': channels.bluetooth, 'emit': 'bluetooth/devices', 'content': bluetooth.devices} );

    });
  }
};

module.exports = bluetooth;