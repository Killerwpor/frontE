import { Component, OnInit } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {


    abrirPopUp: Boolean=true;
    movil: Boolean=false;
    relatos: Boolean=true;
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
}
