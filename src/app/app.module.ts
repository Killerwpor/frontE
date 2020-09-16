import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule, InputsModule,CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AutoresComponent } from './autores/autores.component';
import { MicrorelatosComponent } from './microrelatos/microrelatos.component';
import { MicroRelatoGeneradoComponent } from './micro-relato-generado/micro-relato-generado.component';
import { CreditosComponent } from './creditos/creditos.component';
import { FisurasComponent } from './fisuras/fisuras.component';

import {HttpClientModule} from '@angular/common/http';
import { FisuraGeneradaComponent } from './fisura-generada/fisura-generada.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoresComponent,
    MicrorelatosComponent,
    MicroRelatoGeneradoComponent,
    CreditosComponent,
    FisurasComponent,
    FisuraGeneradaComponent
  ],
  imports: [
    BrowserModule,
    InputsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
