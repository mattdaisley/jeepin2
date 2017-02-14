#!/bin/bash

#sudo apt-get update

#curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
#sudo apt-get install -y build-essential python-dev nodejs

cd /home/pi/jeepin2 

sudo npm install 

sudo apt-get -y install bluez blueman alsa-utils pulseaudio-module-bluetooth bluez-tools

sudo sed -i '$ a Class = 0x200420' /etc/bluetooth/main.conf

sudo gpasswd -a pi pulse
sudo gpasswd -a pi lp
sudo gpasswd -a pulse lp
sudo gpasswd -a pi audio
sudo gpasswd -a pulse audio

sudo sh -c "echo 'extra-arguments = --exit-idle-time=-1 --log-target=syslog' >> /etc/pulse/client.conf"
sudo hciconfig hci0 up
sudo hciconfig hci0 class 0x200420

sudo mv /etc/xdg/autostart/pulseaudio.desktop /etc/xdg/autostart/pulseaudio.desktop.deac
sudo mv /home/pi/setup/pulseaudio.desktop /home/pi/.config/autostart/pulseaudio.desktop

sudo reboot
# sudo echo "Class = 0x200420" >> /etc/bluetooth/main.conf

# echo > sudo /etc/udev/rules.d/10-bluetooth.rules 'ACTION=="add", KERNEL=="hci0", RUN+="/usr/bin/hciconfig hci0 up"'