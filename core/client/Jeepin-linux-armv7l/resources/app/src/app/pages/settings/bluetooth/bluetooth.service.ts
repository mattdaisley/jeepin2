import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../../shared/socket-service/socket.service';

import { Device } from './device.interface';

@Injectable()
export class BluetoothService {
  private socket;

  constructor( private socketService: SocketService ) { 
  }

  connect() {
    this.socket = this.socketService.connect();
    console.log('service emit', this.socket);
    this.socket.emit('bluetooth/connected', 'request bluetooth/connection');
  }
  
  getDevices() {
    let observable = new Observable<Device[]>(observer => {
      this.socket.on('bluetooth/devices', (data) => {
        console.log(data.content);
        let devices:Device[] = data.content;
        observer.next(devices);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}