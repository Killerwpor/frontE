import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {
  movil: Boolean=false;
  @Output() navegador = new EventEmitter<string>();

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
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

}
