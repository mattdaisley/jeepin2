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
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('music/properties', (data) => {
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