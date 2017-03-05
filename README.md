# jeepin2

node startup
sudo nano /etc/rc.local

chromium startup
sudo nano /home/pi/.config/lxsession/LXDE-pi/autostart
@/usr/bin/chromium-browser --noerrdialogs --disable-infobars --disable-restore-session-state --temp-profile --start-fullscreen http://127.0.0.1:7768
@/usr/bin/chromium-browser --noerrdialogs --disable-infobars --disable-restore-session-state --temp-profile --kiosk


#bluetooth
sudo apt-get install bluez blueman alsa-utils bluez-alsa


pi@raspberrypi:~ $ hciconfig -a
hci0:	Type: BR/EDR  Bus: UART
	BD Address: B8:27:EB:C1:8E:87  ACL MTU: 1021:8  SCO MTU: 64:1
	UP RUNNING PSCAN 
	RX bytes:836 acl:0 sco:0 events:59 errors:0
	TX bytes:3553 acl:0 sco:0 commands:59 errors:0
	Features: 0xbf 0xfe 0xcf 0xfe 0xdb 0xff 0x7b 0x87
	Packet type: DM1 DM3 DM5 DH1 DH3 DH5 HV1 HV2 HV3 
	Link policy: RSWITCH SNIFF 
	Link mode: SLAVE ACCEPT 
	Name: 'raspberrypi'
	Class: 0x000000
	Service Classes: Unspecified
	Device Class: Miscellaneous, 
	HCI Version: 4.1 (0x7)  Revision: 0xb6
	LMP Version: 4.1 (0x7)  Subversion: 0x2209
	Manufacturer: Broadcom Corporation (15)

[bluetooth]# devices
Device 70:70:0D:70:97:EC iPhone
Device 98:01:A7:95:E3:DA Matt’s MacBook Pro


echo > /etc/udev/rules.d/10-bluetooth.rules 'ACTION=="add", KERNEL=="hci0", RUN+="/usr/bin/hciconfig hci0 up"'
sudo nano /etc/bluetooth/main.conf
  update class to Class = 0x200420


Start by install / updating all the packages
sudo apt-get install pulseaudio-module-bluetooth bluez-tools


Add users to groups. This is very important. If using any other distro, replace ‘xbian’ with your username.

sudo gpasswd -a pi pulse
sudo gpasswd -a pi lp
sudo gpasswd -a pulse lp
sudo gpasswd -a pi audio
sudo gpasswd -a pulse audio


Set up PulseAudio, Bluetooth Device Class

sudo sh -c "echo 'extra-arguments = --exit-idle-time=-1 --log-target=syslog' >> /etc/pulse/client.conf"
sudo hciconfig hci0 up
sudo hciconfig hci0 class 0x200420
sudo reboot


mv /etc/xdg/autostart/pulseaudio.desktop /etc/xdg/autostart/pulseaudio.desktop.deac
create a file .config/autostart/pulseaudio.desktop

[Desktop Entry]
Version=1.0
Name=PulseAudio Sound System
Exec=/bin/sh -c "sleep 10; pulseaudio --start"
Terminal=false
Type=Application
X-GNOME-Autostart-Phase=Initialization
NotShowIn=KDE;


#bluez dbus

signal sender=:1.5 -> dest=(null destination) serial=247 path=/org/bluez/hci0/dev_70_70_0D_70_97_EC/player0; interface=org.freedesktop.DBus.Properties; member=PropertiesChanged
   string "org.bluez.MediaPlayer1"
   array [
      dict entry(
         string "Track"
         variant             array [
               dict entry(
                  string "Title"
                  variant                      string "Ruff Ryders' Anthem"
               )
               dict entry(
                  string "Album"
                  variant                      string "It's Dark And Hell Is Hot"
               )
               dict entry(
                  string "TrackNumber"
                  variant                      uint32 63
               )
               dict entry(
                  string "Artist"
                  variant                      string "DMX"
               )
               dict entry(
                  string "NumberOfTracks"
                  variant                      uint32 75
               )
               dict entry(
                  string "Duration"
                  variant                      uint32 214000
               )
            ]
      )
   ]
   array [
   ]
