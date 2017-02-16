import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BtDevice } from '../bt-device/bt-device.interface';

@Component({
  selector: 'bt-device-list',
  templateUrl: './bt-device-list.component.html',
  styleUrls: ['./bt-device-list.component.scss']
})
export class BtDeviceListComponent {

  @Input() devices: BtDevice[];

  constructor() { }

}