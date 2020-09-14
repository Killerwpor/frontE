import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MicroRelato } from '../modelos/microRelato';
import { microRelatos } from '../modelos/microRelatos'

import * as $ from "jquery";

@Component({
  selector: 'app-microrelatos',
  templateUrl: './microrelatos.component.html',
  styleUrls: ['./microrelatos.component.css']
})
export class MicrorelatosComponent implements OnInit {

  

  constructor() { }
  respuestas={
    respuesta0: "",
    respuesta1: "",
    respuesta2: "",
    respuesta3: "",
    respuesta4: "",
    respuesta5: "",
    respuesta6: "",
    respuesta7: "",
    respuesta8: "",
    respuesta9: "",
  }

  microRelatos: Boolean=false;
  topPosition: Number=170; //170
  abrirPopUp: Boolean=true;
  movil: Boolean=false;
  contadorFragmento: number=0;
  contadorRespuestas: number=0;
  microRelatoActual: MicroRelato=microRelatos[0];
  bulletVacio=[false,false,false,false,false,false,false,false,false,false]

  @Output() navegador = new EventEmitter<string>();

  ngOnInit(): void {
  }



  next(valor){
    if(valor){
      switch(this.contadorFragmento){
        case 0:
          if($("#pregunta0").val()==""){
            alert("Debe responder la pregunta para continuar");
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
                              console.log(this.respuestas);
                            }
                            break;

            
      }
    }
    else{
      this.siguienteFragmento(false);
    }
 
  }

  siguienteFragmento(siguiente){
    //let isMobile = this.deviceService.isMobile();
    
   

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

    playAudio(url) {
    new Audio(url).play();
  }

}
