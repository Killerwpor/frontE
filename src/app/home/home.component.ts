import { AfterViewInit, Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

import * as $ from "jquery";
import 'jarallax';

declare var jarallax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private deviceService: DeviceDetectorService) { }
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
   this.movil= this.deviceService.isMobile();
  }

  home: String="home1";
  topPosition: Number=0;
  permitirScroll=false;
  permitirMapa=false;
  cambiarCiudadEspejo: Boolean=false;
  permitirAutores: Boolean=false;
  movil: Boolean=false;

  @Output() navegador = new EventEmitter<string>();
 
  arrancarAnimacion(){
    //$(".ciudadEspejo").addClass("animate__animated animate__fadeOut");
    setTimeout(()=>{
      this.permitirScroll=true;
      setTimeout(()=>{
        this.permitirMapa=true;
      }, 24500);
    }, 1500);

    
  }

 


   siguienteHome(home){
    this.topPosition=0; //se reinicia la barra scroll del home2
  this.home=home;
  console.log(this.home);
   }

   
   @HostListener("window:scroll", ["$event"])
onWindowScroll() {
  $(".ciudadEspejo2").addClass("animate__animated animate__fadeOut");
  
  
  // setTimeout(()=>{
  //    this.cambiarCiudadEspejo=false;
   
  // }, 400);

  let isMobile = this.deviceService.isMobile();

var windowHeight = window.innerHeight;
var scrollArea = 1000 - windowHeight;
var scrollTop = window.pageYOffset || window.scrollY;
var scrollPercent = scrollTop/scrollArea || 0;
if(!isMobile){
  this.topPosition = scrollPercent*window.innerHeight*0.34; //el 0.35 es el multiplicador que le da la velocidad para acompañar el texto
  if( this.topPosition>2600)   {   //si se pasa de 2500 se asigna un valor fijo para que la bolita no baje de cierto punto
   this.topPosition = 2600;
  } 
}
else{
  this.topPosition = scrollPercent*window.innerHeight*0.59;
}


 



//alert(isMobile);
//this.topPosition = scrollPercent*window.innerWidth;

}

clickMapa(lado){
  switch(lado){
    case '1':
      this.navegador.emit("autores");
      break;
    case '2':
      this.navegador.emit("microRelatos");
      break;    

    case '3':
      this.navegador.emit("creditos");
      break;

      case '4':
        this.navegador.emit("fisuras");
        break; 

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
        case 4:
          this.navegador.emit("fisuras");
          break;     
  }
  
}

}
