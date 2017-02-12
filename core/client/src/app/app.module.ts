import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
// import { PageRoutesModule } from './pages/pages-routes.module';

import { PagesModule } from './pages/pages.module';

import { MenuComponent } from './menu/menu.component';
import { StatusBarComponent } from './status-bar/status-bar.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    // PageRoutesModule,
    PagesModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    StatusBarComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
