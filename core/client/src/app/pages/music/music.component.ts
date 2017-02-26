import { Component, OnInit, OnDestroy } from '@angular/core';

import { MusicService }  from './music.service';
import { Player } from './music.player.interface';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {
  // device = {};
  // player: Player;
  // playerStatus: string = 'paused';
  // connection;
  // connection2;
  
  constructor(private musicService:MusicService) { }

  ngOnInit() {
    // this.connection = this.musicService.getDeviceProperties().subscribe(properties => {
    //   this.device = properties;
    // });

    // this.connection2 = this.musicService.getPlayerProperties().subscribe(properties => {
    //   this.player = properties;
    //   this.playerStatus = this.player.Status;
    // });
    // this.device = this.musicService.device;
    // this.player = this.musicService.player;
    // this.playerStatus = this.musicService.playerStatus;
  }
  
  ngOnDestroy() {
    console.log('music component destroyed');
    // this.connection.unsubscribe();
    // this.connection2.unsubscribe();
  }

  play() {
    this.musicService.playerStatus = 'playing';
    this.musicService.play();
  }

  pause() {
    this.musicService.playerStatus = 'paused';
    this.musicService.pause();
  }

  next() {
    this.musicService.next();
  }

  previous() {
    this.musicService.previous();
  }
}