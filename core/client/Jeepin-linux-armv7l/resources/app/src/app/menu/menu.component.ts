import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isFullScreen:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  requestFullScreen() {
    var element:any = document.documentElement;
    // Supports most browsers and their versions.
    // var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    // if (requestMethod) { // Native full screen.
    //     requestMethod.call(element);
    //     this.isFullScreen = true;
    // }

    if (element.requestFullscreen) {
      if (element.fullScreenElement) {
          element.cancelFullScreen();       
      } else {
        element.requestFullscreen();
      }
    } else if (element.msRequestFullscreen) {
      if (element.msFullscreenElement) {
          element.msExitFullscreen();
        } else {
        element.msRequestFullscreen();
      }
    } else if (element.mozRequestFullScreen) {
      if (element.mozFullScreen) {
          element.mozCancelFullScreen();
      } else {
        element.mozRequestFullScreen();
      }
    } else if (element.webkitRequestFullscreen) {
      if (document.webkitIsFullScreen) {
          document.webkitCancelFullScreen();
        } else {
        element.webkitRequestFullscreen();
      }
    }
    this.isFullScreen = !this.isFullScreen;

  }

  exitFullScreen() {
    console.log('in exitFullScreen');
    var element:any = document.documentElement;
    // Supports most browsers and their versions.
    var requestMethod = element.exitFullScreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullscreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
        this.isFullScreen = false;
    }
  }

  

}
