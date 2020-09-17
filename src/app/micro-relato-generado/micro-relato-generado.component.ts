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
 @Input() porcentajeSolarPunk: String;
 @Input() porcentajeDistopico: String;
 @Input() respuestas;

 editar: boolean=false;

  constructor(public microRelatoServicio: MicrorelatosService) { }

  ngOnInit(): void {
  }

  clickEditar(){
     this.editar=true;
  }

  clickOtro(){   
     this.microRelatoServicio.generarMicroRelato(this.respuestas).subscribe(result => {
       this.textoGenerado=result.texto;
      });
  }

  guardarMicroRelato(){
    var data={
      texto: this.textoGenerado,
      porcentajeDistopico: this.porcentajeDistopico,
      porcentajeSolarPunk: this.porcentajeSolarPunk
    }
    this.microRelatoServicio.guardarMicroRelato(data).subscribe(result => {
     alert("Se ha guardado exitosamente su microrelato");
     });
  }

}
