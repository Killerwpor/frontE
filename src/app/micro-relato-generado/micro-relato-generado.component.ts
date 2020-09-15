import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-relato-generado',
  templateUrl: './micro-relato-generado.component.html',
  styleUrls: ['./micro-relato-generado.component.css']
})
export class MicroRelatoGeneradoComponent implements OnInit {

 @Input() textoGenerado: String;

  constructor() { }

  ngOnInit(): void {
  }

}
