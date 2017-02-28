import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppRoutesService }   from '../../app-routes.service'
import { TiltGaugesService }  from './tilt-gauges.service';
import { Gyro }               from './gyro.interface';

@Component({
  selector: 'tiltGauges',
  templateUrl: './tilt-gauges.component.html',
  styleUrls: ['./tilt-gauges.component.scss'],
  providers: [ TiltGaugesService ]
})
export class TiltGaugesComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  pitch:number;
  roll:number;
  pitchOffset:number = 0;
  rollOffset:number = 0;
  
  constructor(private tiltGaugesService:TiltGaugesService, private appRoutesService:AppRoutesService) {
    this.tiltGaugesService.connect();
  }

  ngOnInit() {
    this.appRoutesService.currentPage = 'Tilt Gauge';
    this.connection = this.tiltGaugesService.getMessages().subscribe(message => {
      this.pitch = message.pitch;
      this.roll = message.roll;
    });
  }

  updateOffset() {
    this.pitchOffset = this.pitch;
    this.rollOffset = this.roll;
  }
  
  ngOnDestroy() {
    console.log('tilt-gagues component destroyed');
    this.connection.unsubscribe();
  }
}