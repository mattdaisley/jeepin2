import { Component, OnInit, OnDestroy } from '@angular/core';

import { MusicService }  from './music.service';
import { Player } from './music.player.interface';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {
  device = {};
  player:Player;
  connection;
  connection2;
  
  constructor(private musicService:MusicService) { }

  ngOnInit() {
    this.connection = this.musicService.getDeviceProperties().subscribe(properties => {
      this.device = properties;
    });

    this.connection2 = this.musicService.getPlayerProperties().subscribe(properties => {
      this.player = properties;
    });
  }
  
  ngOnDestroy() {
    console.log('music component destroyed');
    this.connection.unsubscribe();
    this.connection2.unsubscribe();
  }

  play() {
    this.player.Status = 'playing';
    this.musicService.play();
  }

  pause() {
    this.player.Status = 'paused';
    this.musicService.pause();
  }

  next() {
    this.musicService.next();
  }

  previous() {
    this.musicService.previous();
  }
}