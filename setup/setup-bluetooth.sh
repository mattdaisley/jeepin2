#!/bin/bash

sudo apt-get -y install bluez blueman alsa-utils pulseaudio-module-bluetooth bluez-tools libbluetooth-dev libdbus-1-dev libglib2.0-dev

sudo sed -i '$ a Class = 0x200420' /etc/bluetooth/main.conf

sudo gpasswd -a pi pulse
sudo gpasswd -a pi lp
sudo gpasswd -a pulse lp
sudo gpasswd -a pi audio
sudo gpasswd -a pulse audio

sudo hciconfig hci0 up
sudo hciconfig hci0 class 0x200420

sudo mv /etc/xdg/autostart/pulseaudio.desktop /etc/xdg/autostart/pulseaudio.desktop.deac

echo 'if [ -f /lib/systemd/system/bluetooth.service ]; then'
echo '  sudo mv /lib/systemd/system/bluetooth.service /lib/systemd/system/bluetooth.service.deac'
echo 'fi'
if [ -f /lib/systemd/system/bluetooth.service ]; then
  sudo mv /lib/systemd/system/bluetooth.service /lib/systemd/system/bluetooth.service.deac
fi

echo 'sudo cp /home/pi/jeepin2/setup/bluetooth.service /lib/systemd/system/bluetooth.service'
sudo cp /home/pi/jeepin2/setup/bluetooth.service /lib/systemd/system/bluetooth.service
