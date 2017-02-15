// import { BrowserModule } from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
// import { HttpModule }         from '@angular/http';

import { BluetoothService } from './bluetooth/bluetooth.service';

import { SettingsRoutingModule } from './settings-routes.module';

import { SettingsComponent } from './settings.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';


@NgModule({
  imports:      [ 
    // BrowserModule,
    FormsModule,
    CommonModule,
    // HttpModule,
    SettingsRoutingModule
  ],
  
  declarations: [
    SettingsComponent,
    BluetoothComponent,
    SettingsHomeComponent
],

  exports: [],

  providers: [ BluetoothService ]
})

export class SettingsModule { }
