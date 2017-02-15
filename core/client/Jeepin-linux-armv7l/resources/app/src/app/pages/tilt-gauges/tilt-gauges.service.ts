import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../shared/socket-service/socket.service';

import { Gyro }       from './gyro.interface';

@Injectable()
export class TiltGaugesService {
  private socket;

  constructor( private socketService: SocketService ) { }

  connect() {
    this.socket = this.socketService.connect();
    this.socket.emit('gyro/connected', 'request gyro/connection');
  }
  
  getMessages() {
    let observable = new Observable<Gyro>(observer => {
      this.socket.on('gyro/data', (data) => {
        console.log(data.content);
        var gyroData:Gyro = { pitch: 0, roll: 0};
        gyroData.pitch = parseInt(data.content.pitch);
        gyroData.roll = parseInt(data.content.roll);
        observer.next(gyroData);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}