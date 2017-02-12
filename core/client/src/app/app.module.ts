import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';

import { TiltGaugesComponent } from './tilt-gauges/tilt-gauges.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    TiltGaugesComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
