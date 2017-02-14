#!/bin/bash

sudo mv /etc/rc.local /etc/rc.local.deac
sudo mv /home/pi/jeepin2/setup/rc.local /etc/rc.local
sudo chown root /etc/rc.local
sudo chgrp root /etc/rc.local
sudo chmod 755 rc.local