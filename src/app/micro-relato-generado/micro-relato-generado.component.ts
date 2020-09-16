import { Component, Input, OnInit } from '@angular/core';
import {
  MicrorelatosService
} from '../microrelatos/microrelatos.service';


@Component({
  selector: 'app-micro-relato-generado',
  templateUrl: './micro-relato-generado.component.html',
  styleUrls: ['./micro-relato-generado.component.css']
})
export class MicroRelatoGeneradoComponent implements OnInit {

 @Input() textoGenerado: String;
 @Input() respuestas;

 editar: boolean=false;

  constructor(public microRelatoServicio: MicrorelatosService) { }

  ngOnInit(): void {
  }

  clickEditar(){
     this.editar=true;
  }

  clickOtro(){   
    console.log(this.respuestas);
     this.microRelatoServicio.postChartPanel(this.respuestas).subscribe(result => {
       this.textoGenerado=result;
      });
  }

}
