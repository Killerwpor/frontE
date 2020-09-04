import { Component, OnInit } from '@angular/core';

import { fragmentos } from '../modelos/fragmentos'
import { Fragmento } from '../modelos/fragmento';

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
  fragmentoActual: Fragmento=fragmentos[0];
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
        this.fragmentoActual=fragmentos[this.contadorFragmento+1];
        this.bulletVacio[this.contadorFragmento]=true;
        this.contadorFragmento++;    
       
     
        /*if(isMobile) {
          window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
        }*/
      }
      
      
    }
    else{
      if(this.contadorFragmento>0){
        this.fragmentoActual=fragmentos[this.contadorFragmento-1];
        this.bulletVacio[this.contadorFragmento-1]=false;
        this.contadorFragmento--;
        /*if(isMobile) {
        window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
        }*/
      }
    }
  }

}
