import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../../shared/socket-service/socket.service';

import { BtDevice } from './bt-device/bt-device.interface';

@Injectable ()
export class BluetoothService {
  private socket;
  private devices:BtDevice[];
  private isConnecting:Boolean = false;

  constructor( private socketService: SocketService ) { 
  }

  connect() {
    this.socket = this.socketService.connect();
    console.log('service emit', this.socket);
    this.socket.emit('bluetooth/connected', 'request bluetooth/connection');
  }

  connectDevice( mac:String ) {
    this.isConnecting = true;
    this.socket.emit('bluetooth/device/connect', mac);
  }

  checkIsConnecting():Boolean {
    return this.isConnecting;
  }
  
  getDevices() {
    let observable = new Observable<BtDevice[]>(observer => {
      this.socket.on('bluetooth/devices', (data) => {
        console.log(data.content);
        this.devices = data.content;
        observer.next(this.devices);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }
}