# jeepin2

node startup
sudo nano /etc/rc.local

chromium startup
sudo nano /home/pi/.config/lxsession/LXDE-pi/autostart
@/usr/bin/chromium-browser --noerrdialogs --disable-infobars --disable-restore-session-state --temp-profile --start-fullscreen http://127.0.0.1:7768
@/usr/bin/chromium-browser --noerrdialogs --disable-infobars --disable-restore-session-state --temp-profile --kiosk
