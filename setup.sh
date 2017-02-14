#!/bin/bash

sudo apt-get update

#sudo apt-get -y install nodejs npm node-semver
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y build-essential python-dev nodejs

cd jeepin2 

sudo npm install 