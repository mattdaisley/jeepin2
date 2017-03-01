import { Component, OnInit } from '@angular/core';

import { StatusBarService } from '../../status-bar/status-bar.service';

@Component({
  styleUrls: ['./odb.component.scss'],
  template: '<div class="container"><h2>Page coming soon</h2></div>'
})

export class ODBComponent {

  constructor(private statusBarService:StatusBarService) { }

  ngOnInit() {
    this.statusBarService.currentPage = 'ODB-II';
  }
  
}