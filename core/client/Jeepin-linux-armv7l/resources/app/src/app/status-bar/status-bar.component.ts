import { Component, OnInit } from '@angular/core';

import { StatusBarService } from './status-bar.service';
import { MusicService } from '../pages/music/music.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  constructor(private musicService:MusicService, private statusBarService:StatusBarService) {
    this.musicService.connect();
  }

  ngOnInit() {
  }

}
