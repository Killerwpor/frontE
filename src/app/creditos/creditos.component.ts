import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() navegador = new EventEmitter<string>();

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
