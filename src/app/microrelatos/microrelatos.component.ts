import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

import { MicroRelato } from '../modelos/microRelato';
import { microRelatos } from '../modelos/microRelatos'
import domtoimage from 'dom-to-image';

import {
  MicrorelatosService
} from "./microrelatos.service";


import * as $ from "jquery";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-microrelatos',
  templateUrl: './microrelatos.component.html',
  styleUrls: ['./microrelatos.component.css']
})
export class MicrorelatosComponent implements OnInit {

  


  constructor(public microRelatoServicio: MicrorelatosService, private deviceService: DeviceDetectorService, private myElement: ElementRef ) { }

  orientacion: String;
  numeroFisura: String;
  relatoGuardado: Boolean=false;
  audio = new Audio();
  permitirTexto: Boolean=false;
  compartirRedes: Boolean=false;
  test={
    "test": "test"
  }
  primerParrafo: string="";
  textoGenerado: string="";
  porcentajeSolarPunk: string="";
  porcentajeDistopico: string="";
  respuestas={
    "respuesta0": "",
    "respuesta1": "",
    "respuesta2": "",
    "respuesta3": "",
    "respuesta4": "",
    "respuesta5": "",
    "respuesta6": "",
    "respuesta7": "",
    "respuesta8": "",
    "respuesta9": "",
  }

  microRelatos: Boolean=false;
  topPosition: Number=170; //170
  abrirPopUp: Boolean=true;
  movil: Boolean=false;
  contadorFragmento: number=0;
  contadorRespuestas: number=0;
  microRelatoActual: MicroRelato=microRelatos[0];
  urlImagen: String;
  bulletVacio=[false,false,false,false,false,false,false,false,false,false]

  @Output() navegador = new EventEmitter<string>();

  ngOnInit(): void {
    if (window.outerWidth > window.outerHeight) {
      this.orientacion="landscape";
      
  
  }
  else{
   
    this.orientacion="portrait";
  }

   this.movil= this.deviceService.isMobile();
  }

  abrirTexto(){
    if(this.permitirTexto){
      this.permitirTexto=false;
    }
    else{
      this.permitirTexto=true;
    }
  }

  habilitarCompartir(){

    this.compartirRedes=true;

  }

  async guardarMicroRelato(){
  
    
    var data={
      texto: this.textoGenerado,
      porcentajeDistopico: this.porcentajeDistopico,
      porcentajeSolarPunk: this.porcentajeSolarPunk
    }

    console.log(data);



    this.microRelatoServicio.guardarMicroRelato(this.respuestas).subscribe(result => {
      console.log(result);
      this.numeroFisura=result.numeroFisura;
      this.urlImagen=result.urlImagen;
      this.relatoGuardado=true;
    //  console.log(this.numeroFisura);
     });

    //console.log(this.numeroFisura);
   
     //$(".container-fluid2").addClass("hide");
  }


  generarMicroRelato(data){
    this.microRelatoServicio.generarMicroRelato(data).subscribe(result => {
      console.log(result);
     this.textoGenerado=result.texto;
     this.porcentajeDistopico=result.porcentajeDistopico;
     this.porcentajeSolarPunk=result.porcentajeSolarPunk;
     this.porcentajeSolarPunk=result.porcentajeSolarPunk;
     this.urlImagen=result.urlImagen;
     this.primerParrafo=result.primerParrafo;
    });
  }


  next(valor){
    const player = this.myElement.nativeElement.querySelector('video');
  player.load();
  window.scroll(0,0);
    if(valor){
      switch(this.contadorFragmento){
        case 0:
          if($("#pregunta0").val()==""){
            alert("Debe responder la pregunta para continuar");
          }
          else if($("#pregunta0").val().toString().indexOf(' ')>=0){
            alert("Solo debe ingresar una palabra");
          }
          else{
            this.respuestas.respuesta0=String($("#pregunta0").val());
            this.contadorRespuestas++;
            this.siguienteFragmento(true);
          }          
          break;
          case 1:
            if($('input:checked').val()==undefined){
              alert("Debe responder la pregunta para continuar");
            }
            else{
              this.respuestas.respuesta1=String($('input:checked').val());
              this.contadorRespuestas++;
              this.siguienteFragmento(true);
            }
            break;
            case 2:
              if($('input:checked').val()==undefined){
                alert("Debe responder la pregunta para continuar");
              }
              else{
                this.respuestas.respuesta2=String($('input:checked').val());
                this.contadorRespuestas++;
                this.siguienteFragmento(true);
              }
              break;
              case 3:
                if($('input:checked').val()==undefined){
                  alert("Debe responder la pregunta para continuar");
                }
                else{
                  this.respuestas.respuesta3=String($('input:checked').val());
                  this.contadorRespuestas++;
                  this.siguienteFragmento(true);
                }
                break;
                case 4:
                  if($('input:checked').val()==undefined){
                    alert("Debe responder la pregunta para continuar");
                  }
                  else{
                    this.respuestas.respuesta4=String($('input:checked').val());
                    this.contadorRespuestas++;
                    this.siguienteFragmento(true);
                  }
                  break;
                  case 5:
                    if($("#pregunta5").val()==""){
                      alert("Debe responder la pregunta para continuar");
                    }
                    else if($("#pregunta5").val().toString().indexOf(' ')>=0){
                      alert("Solo debe ingresar una palabra");
                    }
                    else{
                      this.respuestas.respuesta5=String($("#pregunta5").val());
                      this.contadorRespuestas++;
                      this.siguienteFragmento(true);
                    }   
                    break;
                    case 6:
                      if($('input:checked').val()==undefined){
                        alert("Debe responder la pregunta para continuar");
                      }
                      else{
                        this.respuestas.respuesta6=String($('input:checked').val());
                        this.contadorRespuestas++;
                        this.siguienteFragmento(true);
                      }
                      break;
                      case 7:
                        if($("#pregunta7").val()==""){
                          alert("Debe responder la pregunta para continuar");
                        }
                        else if($("#pregunta7").val().toString().indexOf(' ')>=0){
                          alert("Solo debe ingresar una palabra");
                        }
                        else{
                          this.respuestas.respuesta7=String($("#pregunta7").val());
                          this.contadorRespuestas++;
                          this.siguienteFragmento(true);
                        }   
                        break;
                        case 8:
                          if($('input:checked').val()==undefined){
                            alert("Debe responder la pregunta para continuar");
                          }
                          else{
                            this.respuestas.respuesta8=String($('input:checked').val());
                            this.contadorRespuestas++;
                            this.siguienteFragmento(true);
                          }
                          break;
                          case 9:
                            if($('input:checked').val()==undefined){
                              alert("Debe responder la pregunta para continuar");
                            }
                            else{
                              this.respuestas.respuesta9=String($('input:checked').val());
                              this.contadorRespuestas++;
                              this.siguienteFragmento(true);
                              //console.log(this.respuestas);
                            }
                            break;

            
      }
      
    }
    else{
      this.siguienteFragmento(false);
    }
 if(this.contadorRespuestas==10){
   this.generarMicroRelato(this.respuestas);
 }
  }

  siguienteFragmento(siguiente){
    this.stopAudio();
    //let isMobile = this.deviceService.isMobile();
    
    console.log(this.contadorRespuestas);

    if(siguiente){
    
      if(this.contadorFragmento!=9){        
        this.microRelatoActual=microRelatos[this.contadorFragmento+1];
      } 
      if(this.contadorFragmento==9 && this.contadorRespuestas!=10){
        this.contadorFragmento=-1;
        this.microRelatoActual=microRelatos[0];
      }
      this.contadorFragmento++;
      
      this.bulletVacio[this.contadorFragmento]=true;
      this.apagarBullets(this.contadorFragmento);      
    }
    else{    

  
      this.bulletVacio[this.contadorFragmento]=false;
      if(this.contadorFragmento!=0){        
        this.contadorFragmento--; 
        this.microRelatoActual=microRelatos[this.contadorFragmento];
      }           
      this.bulletVacio[this.contadorFragmento]=true;
      this.apagarBullets(this.contadorFragmento);    
      
      if(this.contadorRespuestas!=0){
        this.contadorRespuestas--;
      }
     
  }
  }
  

  apagarBullets(bullet){
    
      for(var i in this.bulletVacio){
        if(i!=bullet){
          this.bulletVacio[i]=false;
        }
      } 
    
  
  }

  apagarBullets2(bullet){
    
    for(var i in this.bulletVacio){     
        this.bulletVacio[i]=false;
          } 
  

}

  permitirRelatos(numero){  
    if(this.microRelatos){ 
      this.apagarBullets2(0);  
      this.microRelatos=false;      
    }
    else{
       this.microRelatoActual=microRelatos[numero];   
          this.bulletVacio[numero]=true;
         this.contadorFragmento=numero;     
      this.microRelatos=true;
    }
  }

  focusFunction(){
    alert("alert");
  }

  clickMenu(lado){
this.stopAudio();
    switch(lado){
        case 0:  
        this.navegador.emit("home");
        break;
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

  stopAudio(){
    this.audio.pause();
  }

    playAudio(url) {
      this.audio.pause();
    this.audio.src=url;
    this.audio.play();
    
   
  }


  async compartirFb(){ 
    if(this.relatoGuardado){
    
      console.log(this.numeroFisura);
      $(".container-fluidMovil").removeClass("hide");
      var node = document.getElementById('testMovil');
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
           $(".container-fluidMovil").addClass("hide");
    
     
     
      }
      else{
        alert("Primero debe guardar su relato.");
      }
      }

      dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        }

        async guardarS3(img){
          //alert("guardar");
          var datos= this.microRelatoServicio.uploadFile(img);
          return datos;
        }

        compartirFacebook(url) {
          // t=document.title;
         var t="descripcion";
         window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
         //window.open('https://www.facebook.com/sharer.php?u=www.google.com&picture=https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/16:9/w_1920,c_limit/bob_esponja_9564.png', 'ventanacompartir', 'toolbar=0, status=0, width=650, height=450');
        
       }
       
       compartirTwitter(url) {
         // t=document.title;
        var t="descripcion";
        window.open("https://twitter.com/share?url="+encodeURIComponent(url)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
        //window.open('https://www.facebook.com/sharer.php?u=www.google.com&picture=https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/16:9/w_1920,c_limit/bob_esponja_9564.png', 'ventanacompartir', 'toolbar=0, status=0, width=650, height=450');
       }
       
  async compartirTw(){
    if(this.relatoGuardado){
    
      console.log(this.numeroFisura);
      $(".container-fluidMovil").removeClass("hide");
      var node = document.getElementById('testMovil');
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
           this.compartirTwitter("https://imagenes-generadas.s3.amazonaws.com/"+timestamp);  
           $(".container-fluidMovil").addClass("hide");
    
     
     
      }
      else{
        alert("Primero debe guardar su relato.");
      }
     }
       
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
      

}
