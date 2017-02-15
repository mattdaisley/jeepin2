import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SettingsComponent } from './settings.component';
// import { UserService } from './user.service';

describe('WelcomeComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  
  // let userService:UserService;

  beforeEach(async(() => {
    // Declare stub UserService for test purposes
    // let userServiceStub = {
    //   isLoggedIn: true,
    //   user: { name: 'Test User'}
    // };

    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      // providers:  [ {provide: UserService, useValue: userServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    //userService = TestBed.get(UserService);
    // userService = fixture.debugElement.injector.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});