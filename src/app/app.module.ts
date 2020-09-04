import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule, InputsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AutoresComponent } from './autores/autores.component';
import { MicrorelatosComponent } from './microrelatos/microrelatos.component';
import { MicroRelatoGeneradoComponent } from './micro-relato-generado/micro-relato-generado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoresComponent,
    MicrorelatosComponent,
    MicroRelatoGeneradoComponent
  ],
  imports: [
    BrowserModule,
    InputsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
