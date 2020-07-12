import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GoogleMapsModule, GoogleMap} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule
  ],
  providers: [GoogleMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
