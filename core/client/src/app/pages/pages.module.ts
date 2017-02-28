import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { HomeComponent }         from './home/home.component';
import { MusicComponent }        from './music/music.component';
import { TiltGaugesComponent }   from './tilt-gauges/tilt-gauges.component';
import { NavigationComponent }   from './navigation/navigation.component';
import { ODBComponent }          from './odb/odb.component';
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
    HomeComponent,
    MusicComponent,
    TiltGaugesComponent,
    NavigationComponent,
    ODBComponent,
    PageNotFoundComponent
  ], 

  exports: []
})

export class PagesModule { }
