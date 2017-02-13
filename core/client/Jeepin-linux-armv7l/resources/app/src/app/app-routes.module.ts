import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { pageRoutes } from './pages/pages-routes.module';

const appRoutes: Routes = [
  ...pageRoutes
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