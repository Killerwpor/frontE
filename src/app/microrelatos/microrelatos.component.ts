import { Component, OnInit } from '@angular/core';

import { MicroRelato } from '../modelos/microRelato';
import { microRelatos } from '../modelos/microRelatos'


@Component({
  selector: 'app-microrelatos',
  templateUrl: './microrelatos.component.html',
  styleUrls: ['./microrelatos.component.css']
})
export class MicrorelatosComponent implements OnInit {

  

  constructor() { }

  microRelatos: Boolean=true;
  topPosition: Number=170; //170
  abrirPopUp: Boolean=true;
  movil: Boolean=false;
  contadorFragmento: number=0;
  microRelatoActual: MicroRelato=microRelatos[0];
  bulletVacio=[false,false,false,false,false,false,false,false,false,false]

  ngOnInit(): void {
  }

  siguienteFragmento(siguiente){
    //let isMobile = this.deviceService.isMobile();
    if(siguiente=="true"){
      if(this.contadorFragmento==9){
        this.bulletVacio[this.contadorFragmento]=true;
      }
      if(this.contadorFragmento<9){
        this.microRelatoActual=microRelatos[this.contadorFragmento+1];
        this.bulletVacio[this.contadorFragmento]=true;
        this.contadorFragmento++;    
       
     
        /*if(isMobile) {
          window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
        }*/
      }
      
      
    }
    else{
      if(this.contadorFragmento>0){
        this.microRelatoActual=microRelatos[this.contadorFragmento-1];
        this.bulletVacio[this.contadorFragmento-1]=false;
        this.contadorFragmento--;
        /*if(isMobile) {
        window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
        }*/
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


}
