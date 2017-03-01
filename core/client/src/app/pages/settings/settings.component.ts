import { Component, OnInit } from '@angular/core';

import { StatusBarService } from '../../status-bar/status-bar.service';

declare var electron: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private statusBarService:StatusBarService) { }

  ngOnInit() {
    this.statusBarService.currentPage = 'Settings';
  }

}