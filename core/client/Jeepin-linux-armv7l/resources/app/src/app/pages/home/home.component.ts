import { Component, OnInit } from '@angular/core';

import { AppRoutesService } from '../../app-routes.service'

@Component({
  styleUrls: ['./home.component.scss'],
  template: '<div class="container"><h2>Page coming soon</h2></div>'
})

export class HomeComponent {

  constructor(private appRoutesService:AppRoutesService) { }

  ngOnInit() {
    this.appRoutesService.currentPage = '';
  }

}