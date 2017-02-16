var DBus = require('dbus');

var bus = DBus.getBus('system');


bus.getInterface(
        'org.bluez',
        '/org/bluez/hci0/dev_70_70_0D_70_97_EC/player0',
        'org.freedesktop.DBus.Properties',
        //'org.bluez.MediaPlayer1',
        function( err, iface ) {
                //console.log(iface);

                iface.getProperties( function( err, props ) {
                        console.log('org.freedesktop.DBus.Properties props:');
                        console.log(props);
                });

                iface.on('PropertiesChanged', function( err, data ) {
                        console.log('org.freedesktop.DBus.Properties PropertiesChanged');
                        console.log(data);
                });
        }
);

bus.getInterface(
        'org.bluez',
        '/org/bluez/hci0/dev_70_70_0D_70_97_EC/player0',
        //'org.freedesktop.DBus.Properties',
        'org.bluez.MediaPlayer1',
        function( err, iface ) {
                //console.log(iface);

                iface.getProperties( function( err, props ) {
                        console.log('org.bluez.MediaPlayer1 props:');
                        console.log(props);
                });

                iface.on('PropertiesChanged', function( err, data ) {
                        console.log('org.freedesktop.DBus.Properties PropertiesChanged');
                        console.log(data);
                });


        }
);

bus.getInterface(
        'org.bluez',
        '/org/bluez/hci0/dev_70_70_0D_70_97_EC/player0',
        //'org.freedesktop.DBus.Properties',
        'org.bluez.MediaPlayer1',
        function( err, iface ) {
                console.log(iface);
                iface.Play('', function(err, result) {
                        if (err) {
                                return console.log(err);
                        }

                        console.log(result);
                });
        }
);


bus.getInterface(
        'org.bluez',
        '/org/bluez/hci0/dev_70_70_0D_70_97_EC/player0',
        //'org.freedesktop.DBus.Properties',
        'org.bluez.MediaPlayer1',
        function( err, iface ) {
                console.log(iface);
                iface.Pause('', function(err, result) {
                        if (err) {
                                return console.log(err);
                        }

                        console.log(result);
                });
        }
);

