import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  MicrorelatosService
} from '../microrelatos/microrelatos.service';


import domtoimage from 'dom-to-image';

import { saveAs } from 'file-saver';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-micro-relato-generado',
  templateUrl: './micro-relato-generado.component.html',
  styleUrls: ['./micro-relato-generado.component.css']
})
export class MicroRelatoGeneradoComponent implements OnInit {

orientacion: String;
@Input() primerParrafo: String;
 @Input() textoGenerado: String;
 @Input() porcentajeSolarPunk: String;
 @Input() porcentajeDistopico: String;
 @Input() respuestas;
 @Input() urlImagen;
 @Input() numeroFisura: String;
 movil: Boolean=false;
 relatoGuardado: Boolean=false;


 compartir: boolean=false;
 editar: boolean=false;
 compartirRedes: boolean=false;
 post: boolean=false;

  constructor(public microRelatoServicio: MicrorelatosService, private deviceService: DeviceDetectorService) { }


  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    if (window.outerWidth > window.outerHeight) {
      this.orientacion="portrait";
  
  }
  else{
   
    this.orientacion="landscape";
  }
  //alert(this.orientacion);
  }

  ngOnInit(): void {

    if (window.outerWidth > window.outerHeight) {
      this.orientacion="landscape";
      
  
  }
  else{
   
    this.orientacion="portrait";
  }


    this.porcentajeSolarPunk="";
    this.movil= this.deviceService.isMobile();
  }

  clickEditar(){
     this.editar=true;
  }

  habilitarCompartir(){
    

    this.compartirRedes=true;

  }

  clickOtro(){   
     this.microRelatoServicio.generarMicroRelato(this.respuestas).subscribe(result => {
       this.textoGenerado=result.texto;
       console.log(this.textoGenerado);
      });
      console.log(this.textoGenerado);

  }

  async guardarS3(img){
    //alert("guardar");
    var datos= this.microRelatoServicio.uploadFile(img);
    return datos;
  }

  async guardarMicroRelato(){
 
    alert("Se ha guardado su microrelato éxitosamente");
    $(".iconSubeTuHistoria").hide();

    var data={
      texto: this.textoGenerado,
      porcentajeDistopico: this.porcentajeDistopico,
      porcentajeSolarPunk: this.porcentajeSolarPunk
    }
    this.microRelatoServicio.guardarMicroRelato(this.respuestas).subscribe(result => {
      this.numeroFisura=result.numeroFisura;
      this.urlImagen=result.urlImagen;
      this.relatoGuardado=true;
    //  console.log(this.numeroFisura);
     });

    //console.log(this.numeroFisura);
   
     //$(".container-fluid2").addClass("hide");
  }




 async compartirFb(){ 
if(this.relatoGuardado){


  $(".container-fluid2").removeClass("hide");
  var node = document.getElementById('test');
  var img = new Image();
await domtoimage.toPng(node)
  .then(function (dataUrl) {
     
      img.src = dataUrl;
   
    //  document.getElementById('imagenNueva').appendChild(img);
  })
  
  .catch(function (error) {
    alert("error");
      console.error('oops, something went wrong!', error);    });

  
  var timestamp = new Date().getTime().toString(); //esto es para tener un nombre unico de archivo
  var file = this.dataURLtoFile(img.src, timestamp);
 var url=this.guardarS3(file);
 console.log("https://imagenes-generadas.s3.amazonaws.com/"+timestamp);
       this.compartirFacebook("https://imagenes-generadas.s3.amazonaws.com/"+timestamp);  
       $(".container-fluid2").addClass("hide");

 
 
  }
  else{
    alert("Primero debe guardar su relato.");
  }
  }

  async compartirTw(){
    if(this.relatoGuardado){
    
    if(this.numeroFisura==undefined){
      this.guardarMicroRelato();
    }
    $(".container-fluid2").removeClass("hide");
       var node = document.getElementById('test');
       var img = new Image();
   await domtoimage.toPng(node)
       .then(function (dataUrl) {
          
           img.src = dataUrl;
           $(".container-fluid2").addClass("hide");
         //  document.getElementById('imagenNueva').appendChild(img);
       })
       
       .catch(function (error) {
         alert("error");
           console.error('oops, something went wrong!', error);    });
   
       
       var timestamp = new Date().getTime().toString(); //esto es para tener un nombre unico de archivo
       var file = this.dataURLtoFile(img.src, timestamp);
      var url=this.guardarS3(file);
      console.log("https://imagenes-generadas.s3.amazonaws.com/"+timestamp);
       this.compartirTwitter("https://imagenes-generadas.s3.amazonaws.com/"+timestamp);
      }
      else{
        alert("Primero debe guardar su relato.");
      }
     }
  

  compartirFacebook(url) {
   // t=document.title;
  var t="descripcion";
  window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
  //window.open('https://www.facebook.com/sharer.php?u=www.google.com&picture=https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/16:9/w_1920,c_limit/bob_esponja_9564.png', 'ventanacompartir', 'toolbar=0, status=0, width=650, height=450');
  this.post=false;
}

compartirTwitter(url) {
  // t=document.title;
 var t="descripcion";
 window.open("https://twitter.com/share?url="+encodeURIComponent(url)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
 //window.open('https://www.facebook.com/sharer.php?u=www.google.com&picture=https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/16:9/w_1920,c_limit/bob_esponja_9564.png', 'ventanacompartir', 'toolbar=0, status=0, width=650, height=450');
}

 dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
  }


  

}
