import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Subscription }   from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

import { TiltGaugesComponent } from './tilt-gauges.component';
import { TiltGaugesService } from './tilt-gauges.service';
// import { Gyro } from './gyro.interface';

describe('WelcomeComponent', () => {
  let component: TiltGaugesComponent;
  let fixture: ComponentFixture<TiltGaugesComponent>;
  let tiltGaugesServiceStub: TiltGaugesService;
  let tiltGaugesService:TiltGaugesService;

  beforeEach(async(() => {
    // Declare stub TiltGaugesService for test purposes
    let tiltGaugesServiceStub = {
      // connect: function() {},
      // getMessages: Observable.of(true)
    };

    TestBed.configureTestingModule({
      declarations: [ TiltGaugesComponent ],
      providers:  [ {provide: TiltGaugesService, useValue: tiltGaugesServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltGaugesComponent);
    component = fixture.componentInstance;

    tiltGaugesService = fixture.debugElement.injector.get(TiltGaugesService);
    
    fixture.detectChanges(); // forces ngOnInit to run
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});