import { Component, OnInit, OnDestroy } from '@angular/core';

import { MusicService }  from './music.service';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  providers: [ MusicService ]
})
export class MusicComponent implements OnInit, OnDestroy {
  properties;
  connection;
  
  constructor(private musicService:MusicService) {
    this.musicService.connect();
  }

  ngOnInit() {
    this.connection = this.musicService.getMessages().subscribe(properties => {
      this.properties = properties;
    });
  }
  
  ngOnDestroy() {
    console.log('music component destroyed');
    this.connection.unsubscribe();
  }

  play() {
    this.musicService.play();
  }

  pause() {
    this.musicService.pause();
  }
}