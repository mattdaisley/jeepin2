import { Component, OnInit } from '@angular/core';

import { AppRoutesService } from '../../app-routes.service'

@Component({
  styleUrls: ['./odb.component.scss'],
  template: '<div class="container"><h2>Page coming soon</h2></div>'
})

export class ODBComponent {

  constructor(private appRoutesService:AppRoutesService) { }

  ngOnInit() {
    this.appRoutesService.currentPage = 'ODB-II';
  }
  
}