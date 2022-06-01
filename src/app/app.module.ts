import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConnectNowModule} from './model/connect.now.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [

    AppRoutingModule,
    ConnectNowModule,
    BrowserModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
