import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MicroRelato } from '../modelos/microRelato';
import { microRelatos } from '../modelos/microRelatos'


@Component({
  selector: 'app-microrelatos',
  templateUrl: './microrelatos.component.html',
  styleUrls: ['./microrelatos.component.css']
})
export class MicrorelatosComponent implements OnInit {

  

  constructor() { }

  microRelatos: Boolean=false;
  topPosition: Number=170; //170
  abrirPopUp: Boolean=true;
  movil: Boolean=false;
  contadorFragmento: number=0;
  microRelatoActual: MicroRelato=microRelatos[0];
  bulletVacio=[true,false,false,false,false,false,false,false,false,false]

  @Output() navegador = new EventEmitter<string>();

  ngOnInit(): void {
  }

  siguienteFragmento(siguiente){
    //let isMobile = this.deviceService.isMobile();
    if(siguiente=="true"){ 
      if(this.contadorFragmento!=9){
        this.contadorFragmento++;
        this.microRelatoActual=microRelatos[this.contadorFragmento];
      } 
      else{
        this.contadorFragmento++;
      }
      
      this.bulletVacio[this.contadorFragmento]=true;
      this.apagarBullets(this.contadorFragmento);      
    }
    else{
      
      this.bulletVacio[this.contadorFragmento]=false;
      if(this.contadorFragmento!=0){        
        this.contadorFragmento--; 
        this.microRelatoActual=microRelatos[this.contadorFragmento];
      }           
      
      this.bulletVacio[this.contadorFragmento]=true;
      this.apagarBullets(this.contadorFragmento);      
    }
  }

  apagarBullets(bullet){
    for(var i in this.bulletVacio){
      if(i!=bullet){
        this.bulletVacio[i]=false;
      }
    }
  }

  permitirRelatos(){
    if(this.microRelatos){    
      this.microRelatos=false;
    }
    else{
      this.microRelatos=true;
    }
  }

  clickMenu(lado){

    switch(lado){
      case 1:
        this.navegador.emit("home");
        break;
      case 2:
        this.navegador.emit("autores");
        break;  
        case 3:
          this.navegador.emit("microRelatos");
          break;     
    }
    
  }

    playAudio(url) {
    new Audio(url).play();
  }

}
