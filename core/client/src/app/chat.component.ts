import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService }       from './chat.service';
import { Gyro } from './gyro.interface';

@Component({
  moduleId: module.id,
  selector: 'chat',
  template: `<div>
              <img src="assets/jeepside.png" width="400" style="transition: 1s ease-in-out" [ngStyle]="{'transform': 'rotate('+(pitch - pitchOffset)+'deg)'}"/>
              <img src="assets/jeeprear.png" width="400" style="transition: 1s ease-in-out" [ngStyle]="{'transform': 'rotate('+(roll - rollOffset)+'deg)'}"/>
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