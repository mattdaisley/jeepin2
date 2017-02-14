#!/bin/bash

echo 'if [ -f /etc/rc.local ]; then'
echo '  sudo mv /etc/rc.local /etc/rc.local.deac'
echo 'fi'
if [ -f /etc/rc.local ]; then
  sudo mv /etc/rc.local /etc/rc.local.deac
fi

echo 'sudo mv /home/pi/jeepin2/setup/rc.local /etc/rc.local'
sudo cp /home/pi/jeepin2/setup/rc.local /etc/rc.local

echo 'sudo chown root /etc/rc.local'
sudo chown root /etc/rc.local

echo 'sudo chgrp root /etc/rc.local'
sudo chgrp root /etc/rc.local

echo 'sudo chmod 755 /etc/rc.local'
sudo chmod 755 /etc/rc.local
