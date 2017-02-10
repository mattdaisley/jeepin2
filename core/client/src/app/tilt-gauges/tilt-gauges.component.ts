import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { TiltGaugesService }  from './tilt-gauges.service';
import { Gyro }               from './gyro.interface';

@Component({
  moduleId: module.id,
  selector: 'tiltGauges',
  templateUrl: './tilt-gauges.component.html',
  styleUrls: ['./tilt-gauges.component.css'],
  providers: [TiltGaugesService]
})
export class TiltGaugesComponent implements OnInit, OnDestroy, AfterViewInit {
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

  ngAfterViewInit() {
    console.log('go fullscreen');
    this.fullscreen();
  }

  fullscreen() {
      var element:any = document.documentElement;
      // Supports most browsers and their versions.
      var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

      if (requestMethod) { // Native full screen.
          requestMethod.call(element);
      }
    }

  updateOffset() {
    this.pitchOffset = this.pitch;
    this.rollOffset = this.roll;
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}