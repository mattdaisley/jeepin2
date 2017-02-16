// import { BrowserModule } from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
// import { HttpModule }         from '@angular/http';

import { BluetoothService } from './bluetooth.service';

import { BluetoothComponent } from './bluetooth.component';
import { BtDeviceComponent } from './bt-device/bt-device.component';
import { BtDeviceListComponent } from './bt-device-list/bt-device-list.component';


@NgModule({
  imports:      [ 
    FormsModule,
    CommonModule
  ],
  
  declarations: [
    BtDeviceComponent,
    BluetoothComponent,
    BtDeviceListComponent
  ],

  exports: [
    BluetoothComponent
  ],

  providers: [ BluetoothService ]
})

export class BluetoothModule { }
