import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {
  orientacion: String;
  movil: Boolean=false;
  @Output() navegador = new EventEmitter<string>();

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {

    if (window.outerWidth > window.outerHeight) {
      this.orientacion="landscape";
      
  
  }
  else{
    this.orientacion="portrait";
  }


    this.movil= this.deviceService.isMobile();
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
