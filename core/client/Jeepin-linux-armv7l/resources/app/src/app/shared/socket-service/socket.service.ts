import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private url = 'http://127.0.0.1:7768';  
  
  public socket: any;

  constructor() {
    // this.connect();
  }

  connect() {
    this.socket = io(this.url);
    return this.socket;
  }

}