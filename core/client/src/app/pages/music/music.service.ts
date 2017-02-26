import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../shared/socket-service/socket.service';

@Injectable()
export class MusicService {
  private socket;

  constructor( private socketService: SocketService ) { }

  connect() {
    this.socket = this.socketService.connect();
    this.socket.emit('music/connected', 'request music/connection');
  }
  
  getDeviceProperties() {
    let observable = new Observable(observer => {
      this.socket.on('music/device', (data) => {
        console.log(data.content);
        var properties = data.content;
        properties.test = 'testing';
        observer.next(properties);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
  
  getPlayerProperties() {
    let observable = new Observable(observer => {
      this.socket.on('music/player', (data) => {
        console.log(data.content);
        var properties = data.content;
        observer.next(properties);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

  play() {
    this.socket.emit('music/play', '');
  }

  pause() {
    this.socket.emit('music/pause', '');
  }

  next() {
    this.socket.emit('music/next', '');
  }

  previous() {
    this.socket.emit('music/previous', '');
  }
}