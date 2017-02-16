import { BrowserModule } from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { MusicComponent } from './music/music.component';
import { TiltGaugesComponent } from './tilt-gauges/tilt-gauges.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';

import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    SettingsModule
  ],

  providers: [ ],

  declarations: [
    TiltGaugesComponent,
    PageNotFoundComponent,
    MusicComponent
  ], 

  exports: []
})

export class PagesModule { }
