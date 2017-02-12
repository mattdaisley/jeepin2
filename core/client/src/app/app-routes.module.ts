import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TiltGaugesComponent } from './tilt-gauges/tilt-gauges.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';

const appRoutes: Routes = [
  { path: 'tilt-gauges', component: TiltGaugesComponent },
  { path: '',   redirectTo: '/tilt-gauges', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {}