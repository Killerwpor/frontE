import { Component, OnInit, HostListener } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

import { fragmentos } from '../modelos/fragmentos'
import { Fragmento } from '../modelos/fragmento';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  topPosition: Number=170; //170
    abrirPopUp: Boolean=true;
    movil: Boolean=false;
    relatos: Boolean=true;
    contadorFragmento: number=0;
    fragmentoActual: Fragmento=fragmentos[0];
    bulletVacio=[false,false,false,false,false,false,false,false,false,false]

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
    let isMobile = this.deviceService.isMobile();
    if(siguiente=="true"){
      if(this.contadorFragmento==9){
        this.bulletVacio[this.contadorFragmento]=true;
      }
      if(this.contadorFragmento<9){
        this.fragmentoActual=fragmentos[this.contadorFragmento+1];
        this.bulletVacio[this.contadorFragmento]=true;
        this.contadorFragmento++;    
       
     
        if(isMobile) {
          window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
        }
      }
      
      
    }
    else{
      if(this.contadorFragmento>0){
        this.fragmentoActual=fragmentos[this.contadorFragmento-1];
        this.contadorFragmento--;
        if(isMobile) {
        window.scroll(0,0); //scrollea hasta arriba al salir el nuevo fragmento
        }
      }
    }
  }


  @HostListener("window:scroll", ["$event"])
onWindowScroll() {
 
//   let isMobile = this.deviceService.isMobile();
// var windowHeight = window.innerHeight;
// var scrollArea = 1000 - windowHeight;
// var scrollTop = window.pageYOffset || window.scrollY;
// var scrollPercent = scrollTop/scrollArea || 0;
// if(!isMobile){
//   this.topPosition = scrollPercent*window.innerHeight*1; //el 0.35 es el multiplicador que le da la velocidad para acompañar el texto
//   if( this.topPosition<170)   {   
//     this.topPosition = 170;
//    } 
//   if( this.topPosition>720)   {
//        //si se pasa de 2500 se asigna un valor fijo para que la bolita no baje de cierto punto
//    //this.topPosition = 800;
//    //alert("3000");
//   } 
//   console.log(this.topPosition);
// }
// else{
//   this.topPosition = scrollPercent*window.innerHeight*0.59;
// }

 }

}
