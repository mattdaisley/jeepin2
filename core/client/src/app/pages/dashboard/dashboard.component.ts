import { Component, OnInit } from '@angular/core';

import { StatusBarService } from '../../status-bar/status-bar.service';

@Component({
  styleUrls: ['./dashboard.component.scss'],
  template: '<div class="container"><h2>Page coming soon</h2></div>'
})

export class DashboardComponent {

  constructor(private appRoutesService:StatusBarService) { }

  ngOnInit() {
    this.appRoutesService.currentPage = '';
  }

}