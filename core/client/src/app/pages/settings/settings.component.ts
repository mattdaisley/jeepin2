import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { ipcRenderer } from 'electron';

declare var electron: any;

// In renderer process (web page).
// const {ipcRenderer} = require('electron')
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log(arg) // prints "pong"
// })
// ipcRenderer.send('asynchronous-message', 'ping')

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, AfterViewInit {

  isFullScreen: Boolean;
  toggleFullScreenEnabled: Boolean;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if ( electron !== undefined ) {
      this.toggleFullScreenEnabled = true;

      electron.ipcRenderer.on('setFullScreen-reply', (event, arg) => {
        this.isFullScreen = arg;
      });

      electron.ipcRenderer.on('isFullScreen-reply', (event, arg) => {
        this.isFullScreen = arg;
      });

      electron.ipcRenderer.send('isFullScreen', 'checking fullscreen');
    } else {
      this.toggleFullScreenEnabled = false;
      this.isFullScreen = false;
    }

  }

  toggleFullScreen = () => {
    if ( electron ) {
      electron.ipcRenderer.send('setFullScreen', !this.isFullScreen);
    }
  }

}