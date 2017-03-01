import { Component, OnInit } from '@angular/core';

import { StatusBarService } from '../../status-bar/status-bar.service';

@Component({
  styleUrls: ['./navigation.component.scss'],
  template: '<div class="container"><h2>Page coming soon</h2></div>'
})

export class NavigationComponent {

  constructor(private statusBarService:StatusBarService) { }

  ngOnInit() {
    this.statusBarService.currentPage = 'Navigation';
  }

}