import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent }         from './home/home.component';
import { MusicComponent }        from './music/music.component';
import { TiltGaugesComponent }   from './tilt-gauges/tilt-gauges.component';
import { NavigationComponent }   from './navigation/navigation.component';
import { ODBComponent }          from './odb/odb.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';

export const pageRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'tilt-gauges', component: TiltGaugesComponent },
  { path: 'nav', component: NavigationComponent },
  { path: 'odb', component: ODBComponent },
  { path: '**', component: PageNotFoundComponent }
];