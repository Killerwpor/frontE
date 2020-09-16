import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fisura-generada',
  templateUrl: './fisura-generada.component.html',
  styleUrls: ['./fisura-generada.component.css']
})
export class FisuraGeneradaComponent implements OnInit {

  @Input() textoGenerado: String;
  @Input() urlImagen: String;
  constructor() { }

  ngOnInit(): void {
  }

}
