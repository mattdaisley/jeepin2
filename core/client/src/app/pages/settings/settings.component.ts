import { Component, OnInit } from '@angular/core';

import { AppRoutesService } from '../../app-routes.service'

declare var electron: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private appRoutesService:AppRoutesService) { }

  ngOnInit() {
    this.appRoutesService.currentPage = 'Settings';
  }

}