import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { StatusBarService } from '../../status-bar/status-bar.service';
import { SocketService } from '../../shared/socket-service/socket.service';

import { Player } from './music.player.interface';

@Injectable()
export class MusicService {
  private socket;

  public device = {};
  public player: Player;
  public playerStatus: string = 'paused';
  public progressInterval;
  public progressPercent: number = 0;

  connection;
  connection2;

  constructor( private socketService: SocketService, private statusBarService:StatusBarService ) { }

  connect() {
    this.socket = this.socketService.connect();
    this.socket.emit('music/connected', 'request music/connection');

    this.connection = this.getDeviceProperties().subscribe(properties => {
      this.device = properties;
    });

    this.connection2 = this.getPlayerProperties().subscribe(properties => {
      this.player = properties;
      this.playerStatus = this.player.Status;
      if ( this.playerStatus === 'playing') {
        this.statusBarService.Title = this.player.Track.Title;
        this.statusBarService.Artist = this.player.Track.Artist;
      } else {
        this.statusBarService.Title = '';
        this.statusBarService.Artist = '';
      }

      if ( this.playerStatus === 'playing' && !this.progressInterval ) {
        console.log(this.progressInterval);
        this.setupProgressInterval();
      } else if ( this.playerStatus === 'paused' && this.progressInterval ) {
        clearInterval(this.progressInterval);
        delete this.progressInterval;
      }
    });
  }
  
  getDeviceProperties() {
    let observable = new Observable(observer => {
      this.socket.on('music/device', (data) => {
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
  
  getPlayerProperties():Observable<Player> {
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

  setupProgressInterval() {
    this.progressInterval = setInterval( () => {
      if ( this.player && this.player.Track && this.player.Position ) {
        this.player.Position += 1000;
        this.getProgressPercent();
      }
    }, 1000);
  }

  getProgressPercent() {
    if ( this.player && this.player.Track && this.player.Position ) {
      this.progressPercent = ((this.player.Position/this.player.Track.Duration) * 100 );
    } else {
      this.progressPercent = 0;
    }
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