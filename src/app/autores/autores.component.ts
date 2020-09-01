import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {


    abrirPopUp: Boolean=true;
  constructor() { }

  ngOnInit(): void {
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
}
