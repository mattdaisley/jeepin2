#!/bin/bash

cd /home/pi

sudo dpkg --configure -a

sudo apt-get update

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y build-essential python-dev nodejs

sudo npm install -g node-gyp