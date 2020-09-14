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
  fisuras2: Fisura[]=fisuras;
  fisuras3: Fisura[]=fisuras;

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