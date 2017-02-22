import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BluetoothService } from './bluetooth.service';

import { BtDevice } from './bt-device/bt-device.interface';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.scss']
})
export class BluetoothComponent implements OnInit, OnDestroy {
  devices: BtDevice[];
  connection;

  constructor( private bluetoothService:BluetoothService ) {
    console.log('component connect bluetoothService');
    this.bluetoothService.connect();
  }

  ngOnInit() {
    // this.devices = this.bluetoothService.getDevices();
    this.connection = this.bluetoothService.getDevices().subscribe(devices => {
      this.devices = devices;
    });
    // this.connection = this.bluetoothService.getDevices().subscribe(devices => {
    //   this.devices = devices;
    // });
  }

  connectDevice( mac: String ) {
    // this.bluetoothService.connectDevice().subscribe(device => {

    // });
  }
  
  ngOnDestroy() {
    console.log('bluetooth component destroyed');
    this.connection.unsubscribe();
  }

}