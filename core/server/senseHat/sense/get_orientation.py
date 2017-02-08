# from sense_hat import SenseHat
import json
import time
import sys
from random import randint, uniform

sense = SenseHat()

# print(json.dumps( { 'result': sense.get_orientation() } ))
# print(json.dumps( {'result':{'pitch':'100', 'roll': '200'}} ))

pitch = 0;
roll = 0;
step = 2;

while True:
    # pitch = (pitch + uniform(-step, step))
    # roll = (roll + uniform(-step, step))
    # print(json.dumps( {'result':{'pitch':pitch, 'roll': roll}} ))
    print(json.dumps( { 'result': sense.get_orientation() } ))
    sys.stdout.flush()
    time.sleep(.1)