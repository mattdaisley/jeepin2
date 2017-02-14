import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TiltGaugesComponent } from './tilt-gauges/tilt-gauges.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';

export const pageRoutes: Routes = [
  { path: 'tilt-gauges', component: TiltGaugesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent }
];