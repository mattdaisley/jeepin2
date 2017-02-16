import { Component, Input } from '@angular/core';

import { BtDevice } from './bt-device.interface';

import { BluetoothService } from '../bluetooth.service';

@Component({
  selector: 'bt-device',
  templateUrl: './bt-device.component.html',
  // styleUrls: ['./bt-device.component.scss']
})
export class BtDeviceComponent {

  connectingStatus:String = '';

  @Input() device: BtDevice;

  constructor( private bluetoothService:BluetoothService ) {

  }

  connect() {
    if ( !this.bluetoothService.checkIsConnecting() ) {
      this.connectingStatus = 'connecting';
      this.bluetoothService.connectDevice(this.device.mac);
    }
  }

}