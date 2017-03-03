import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.css']
})
export class SettingsHomeComponent implements OnInit, AfterViewInit {

  isFullScreen: Boolean;
  toggleFullScreenEnabled: Boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(electron);
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
    if ( electron !== undefined ) {
      electron.ipcRenderer.send('setFullScreen', !this.isFullScreen);
    }
  }

}