import { Component, OnInit } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

import { fragmentos } from '../modelos/fragmentos'
import { Fragmento } from '../modelos/fragmento';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {


    abrirPopUp: Boolean=true;
    movil: Boolean=false;
    relatos: Boolean=false;
    contadorFragmento: number=0;
    fragmentoActual: Fragmento=fragmentos[0];

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    let isMobile = this.deviceService.isMobile();
    if(isMobile){
      this.movil=true;
    }
    else{
      this.movil=false;
    }
  }

  botonMas: Boolean=true;

  clickPopUp(){
    if(this.abrirPopUp){
      this.abrirPopUp=false;
      this.botonMas=false;
    }
    else{
      this.abrirPopUp=true;
      this.botonMas=true;
    }
  }

  permitirRelatos(){
    if(this.relatos){    
      this.relatos=false;
    }
    else{
      this.relatos=true;
    }
  }

  siguienteFragmento(siguiente){
    if(siguiente=="true"){
      if(this.contadorFragmento<9){
        this.fragmentoActual=fragmentos[this.contadorFragmento+1];
        this.contadorFragmento++;
        window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
      }
      
    }
    else{
      if(this.contadorFragmento>0){
        this.fragmentoActual=fragmentos[this.contadorFragmento-1];
        this.contadorFragmento--;
        window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
      }
    }
  }
}
