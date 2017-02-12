import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Gyro } from './gyro.interface';

export class TiltGaugesService {
  private url = 'http://127.0.0.1:7768';  
  private socket;

  connect() {
    this.socket = io(this.url);
    this.socket.emit('gyro/connected', 'testing socket connection');
  }
  
  getMessages() {
    let observable = new Observable<Gyro>(observer => {
      this.socket.on('gyro/data', (data) => {
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