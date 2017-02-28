import { Injectable } from '@angular/core';

import { Player } from './pages/music/music.player.interface';

@Injectable()
export class AppRoutesService {

  public currentPage: string;
  public player: Player;
  public Title: string;
  public Artist: string;

  constructor() {
    this.currentPage = '';
  }

}