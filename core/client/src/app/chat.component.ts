import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService }       from './chat.service';
import { Gyro } from './gyro.interface';

@Component({
  moduleId: module.id,
  selector: 'chat',
  template: `<div>
              <div style="width:400px; height: 400px; float:left; position:relative; background-color:#000;">
                <img src="assets/guage1.png" width="400" style="position:absolute;"/>
                <img src="assets/guage3.png" width="400" style="position:absolute; transition: 1s ease-in-out" [ngStyle]="{'transform': 'rotate('+(pitch - pitchOffset)+'deg)'}"/>
                <img src="assets/guage2.png" width="400" style="position:absolute;"/>
                <img src="assets/jeepside.png" width="400" style="position:absolute; transition: 1s ease-in-out" [ngStyle]="{'transform': 'rotate('+(pitch - pitchOffset)+'deg)'}"/>
                <img src="assets/guage4.png" width="400" style="position:absolute;"/>
                <div style="position:absolute; left: 150px; top: 280px; width: 100px; height: 100px; color: #ffffff; text-align:center;">{{pitch - pitchOffset}}<sup>o</sup></div>
              </div>
              <div style="width:400px; height: 400px; float:left; position:relative; background-color:#000;">
                <img src="assets/guage1.png" width="400" style="position:absolute;"/>
                <img src="assets/guage3.png" width="400" style="position:absolute; transition: 1s ease-in-out" [ngStyle]="{'transform': 'rotate('+(roll - rollOffset)+'deg)'}"/>
                <img src="assets/guage2.png" width="400" style="position:absolute;"/>
                <img src="assets/jeeprear.png" width="400" style="position:absolute; transition: 1s ease-in-out" [ngStyle]="{'transform': 'rotate('+(roll - rollOffset)+'deg)'}"/>
                <img src="assets/guage4.png" width="400" style="position:absolute;"/>
                <div style="position:absolute; left: 150px; top: 280px; width: 100px; height: 100px; color: #ffffff; text-align:center;">{{roll - rollOffset}}<sup>o</sup></div>
              </div>
            </div>
            <div>
              Original: {{pitch}}, {{roll}}
            </div>
            <div>
              Adjusted: {{pitch - pitchOffset}}, {{roll - rollOffset}}
            </div>
            <button (click)="updateOffset()">Reset Gyro to 0,0</button>`,
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  pitch:number;
  roll:number;
  pitchOffset:number = 0;
  rollOffset:number = 0;
  
  constructor(private chatService:ChatService) {
    this.chatService.connect();
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      console.log(message);
      this.pitch = message.pitch;
      this.roll = message.roll;
    })
  }

  updateOffset() {
    this.pitchOffset = this.pitch;
    this.rollOffset = this.roll;
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}