import { Component, Input, OnInit } from '@angular/core';
import {
  MicrorelatosService
} from '../microrelatos/microrelatos.service';


import domtoimage from 'dom-to-image';

import { saveAs } from 'file-saver';

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
 @Input() urlImagen;
 @Input() numeroFisura;


 compartir: boolean=false;
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

  guardarImagen(){
    var node = document.getElementById('negativo');

domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.getElementById('imagenNueva').appendChild(img);
    })
    .catch(function (error) {
      alert("error");
        console.error('oops, something went wrong!', error);
    });
  }
  

  compartirFacebook(TheImg) {
  var u="https://w7.pngwing.com/pngs/582/403/png-transparent-spongebob-squarepants-and-patrick-star-against-blue-background-patrick-star-cartoon-drawing-desktop-rey-cartoon-food-fictional-character-spongebob.png"
   // t=document.title;
  var t="descripcion";
  window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
}

}
