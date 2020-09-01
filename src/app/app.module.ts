import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { AutoresComponent } from './autores/autores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    AutoresComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
