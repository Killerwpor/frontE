import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import * as $ from "jquery";


import { Fisura } from '../modelos/fisura';

import { DeviceDetectorService } from 'ngx-device-detector';

import {
  MicrorelatosService
} from '../microrelatos/microrelatos.service';



@Component({
  selector: 'app-fisuras',
  templateUrl: './fisuras.component.html',
  styleUrls: ['./fisuras.component.scss']
})
export class FisurasComponent implements OnInit {

  permitirTexto: Boolean=false;
  orientacion: String;
  movil: Boolean=false;
  fisuras1: Fisura[];
  fisuras2: Fisura[];
  fisuras3: Fisura[];

  @Output() navegador = new EventEmitter<string>();
  relatos: Boolean=false;
  numeroFisura: string;

  constructor(public microRelatoServicio: MicrorelatosService, private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {

    var winHeight = $(window).innerHeight();
$(document).ready(function () {
    $(".imagen").height(winHeight);
    $("body").height(winHeight*$(".imagen").length);
});


    $(document).ready(function(){ 
      $(window).scroll(function(){
        

  $(".panelCon").css('bottom',$(window).scrollTop()*-1);

      //  $('.right').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)'); 
     }).scroll();
 });  

 if (window.outerWidth > window.outerHeight) {
  this.orientacion="landscape";
  

}
else{

this.orientacion="portrait";
}


    let isMobile = this.deviceService.isMobile();
    if(isMobile){
      this.movil=true;
    }
    else{
      this.movil=false;
    }
    
    this.microRelatoServicio.traerMicroRelatos().subscribe(result => {
      
      console.log("FISURAS 1");
        this.fisuras1=result[0];
        console.log(this.fisuras1);
        console.log("FISURAS 2");
        this.fisuras2=result[1];
        console.log(this.fisuras2);
        console.log("FISURAS 3");
        this.fisuras3=result[2];
        console.log(this.fisuras3);
      
    
    
     });

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

permitirRelatos(){
  
  if(this.relatos){    
    this.relatos=false;
  }
  else{   
    this.relatos=true;
  }
}

abrirTexto(){
  if(this.permitirTexto){
    this.permitirTexto=false;
  }
  else{
    this.permitirTexto=true;
  }
}


test(event){ 
  let elementId: string = (event.target as Element).id;
  $("#"+elementId+'h').hide();
  var aux=elementId.replace('h','');
  this.clickCard(aux);
  //alert("click");
  //let elementId: string = (event.target as Element).id;
  //console.log(texto);
}

clickCard(elementId){
  $(".imagen").show();
  $(".hide").hide();
  console.log("Id: "+elementId);
  $("#"+elementId).hide();
  $("."+elementId).show();
  this.numeroFisura=elementId;
  $(".img__description_layer").show();
  
}

hide(){
  $(".hide").hide();
  $(".imagen").show();
}


@HostListener("window:scroll", ["$event"])
onWindowScroll() {
  $(document).ready(function(){ 
    $(window).scroll(function(){
      $('.columnaInversa').css('transform', 'translate3d(0,' + $(this).scrollTop()*0.5 + 'px, 0)'); 
      //$('.left').css('transform', 'translate3d(0,'+$(this).scrollTop()*0.01 +'px, 0)'); 
   }).scroll();
});  

}

@HostListener('window:orientationchange', ['$event'])
onOrientationChange(event) {
  if (window.outerWidth > window.outerHeight) {
    this.orientacion="portrait";

}
else{
 
  this.orientacion="landscape";
}
//alert(this.orientacion);
}


}