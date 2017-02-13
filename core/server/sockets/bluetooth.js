// # API routes
var blue      = require('bluetoothctl'),
  bluetooth;


bluetooth = {

  pollDevices: function pollDevices(respond) {
    blue.Bluetooth()

    blue.on(blue.bluetoothEvents.Device, function (devices) {

      for ( var index in devices ) {
        var device = devices[index];
        if ( device.name === 'iPhone' && device.paired === 'yes' && device.connected === 'no') {
            console.log('connecting to ' + device.name + ' ' + device.mac);
            blue.connect(device.mac);
        }
      }

    });

    var hasBluetooth = blue.checkBluetoothController();
    console.log('system has bluetooth controller:' + hasBluetooth);

  }
};

module.exports = bluetooth;