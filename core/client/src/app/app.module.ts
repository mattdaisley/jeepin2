import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SocketService } from './shared/socket-service/socket.service';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';

import { PagesModule } from './pages/pages.module';

import { MenuComponent } from './menu/menu.component';
import { StatusBarComponent } from './status-bar/status-bar.component';


@NgModule({
  providers: [ SocketService ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // PageRoutesModule,
    PagesModule,
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    StatusBarComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})

export class AppModule { }
