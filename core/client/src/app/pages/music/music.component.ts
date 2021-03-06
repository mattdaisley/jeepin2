import { Component, OnInit, OnDestroy } from '@angular/core';

import { StatusBarService } from '../../status-bar/status-bar.service';
import { MusicService }  from './music.service';
import { Player } from './music.player.interface';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {
  
  constructor(private musicService:MusicService, private statusBarService:StatusBarService) { }

  ngOnInit() {
    this.statusBarService.currentPage = 'Music';
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