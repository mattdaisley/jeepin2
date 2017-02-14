import { BrowserModule } from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { TiltGaugesComponent } from './tilt-gauges/tilt-gauges.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  
  declarations: [
    TiltGaugesComponent,
    PageNotFoundComponent,
    SettingsComponent
  ],
  providers:    [ ]
})

export class PagesModule { }
