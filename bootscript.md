"sudo nano /boot/config.txt"
Add the line "lcd_rotate=2" to the top of the file.
Press CTRL+X
Then Y
Then Enter.
And reboot!


sudo sed -i '1s/^/lcd_rotate=2\n/' /boot/config.txt