import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as $ from "jquery";


import { fisuras } from '../modelos/fisuras'
import { Fisura } from '../modelos/fisura';



@Component({
  selector: 'app-fisuras',
  templateUrl: './fisuras.component.html',
  styleUrls: ['./fisuras.component.scss']
})
export class FisurasComponent implements OnInit {

  fisuras1: Fisura[]=fisuras;
  fisuras2: Fisura[]= [
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/001_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "12"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/002_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "13"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/003_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "14"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/004_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "15"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/005_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "16"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/006_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "17"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/001_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "18"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/002_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "19"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/003_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "20"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/004_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "21"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/005_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "22"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/006_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "23"
    }
    
    ]
  fisuras3: Fisura[]= [
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/001_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "24"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/002_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "25"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/003_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "26"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/004_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "27"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/005_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "28"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/006_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "29"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/001_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "30"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/002_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "31"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/003_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "32"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/004_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "33"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/005_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "34"
    },
    {
        urlImagen: "assets/Fisuras/THUMBNAILS/006_libreria.png",
        microRelato: "This is a test",
    numeroFisura: "35"
    }
    
    ]

  @Output() navegador = new EventEmitter<string>();
  relatos: Boolean=false;

  constructor() { }

  ngOnInit(): void {


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

clickCard(event){
  $(".hide").hide();
  let elementId: string = (event.target as Element).id;
  $("#"+elementId).hide();
  $("."+elementId).show();
  
}

hide(numeroFisura){
  $(".hide").hide();
  $("#"+numeroFisura).show();
}
}