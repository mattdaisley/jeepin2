import { Component, OnInit, OnDestroy } from '@angular/core';
import { TiltGaugesService }  from './tilt-gauges.service';
import { Gyro }               from './gyro.interface';

@Component({
  moduleId: module.id,
  selector: 'tiltGauges',
  templateUrl: './tilt-gauges.component.html',
  styleUrls: ['./tilt-gauges.component.css'],
  providers: [TiltGaugesService]
})
export class TiltGaugesComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  pitch:number;
  roll:number;
  pitchOffset:number = 0;
  rollOffset:number = 0;
  
  constructor(private tiltGaugesService:TiltGaugesService) {
    this.tiltGaugesService.connect();
  }

  ngOnInit() {
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
    this.connection.unsubscribe();
  }
}