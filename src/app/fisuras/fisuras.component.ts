import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-fisuras',
  templateUrl: './fisuras.component.html',
  styleUrls: ['./fisuras.component.scss']
})
export class FisurasComponent implements OnInit {

  microRelatoSGenerados=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
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

}