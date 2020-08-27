import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as $ from "jquery";
import 'jarallax';

declare var jarallax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

  home: String="home2";
  permitirScroll=false;
  permitirMapa=false;
  cambiarCiudadEspejo: Boolean=false;
 
  arrancarAnimacion(){
    $(".ciudadEspejo").addClass("animate__animated animate__fadeOut");
    setTimeout(()=>{
      this.permitirScroll=true;
      setTimeout(()=>{
        this.permitirMapa=true;
      }, 24500);
    }, 1500);

    
  }

  onWindowScroll(){ 
    //alert("scroll"); 
  //   console.log(event)    
   $(".ciudadEspejo2").addClass("animate__animated animate__fadeOut");
  
     setTimeout(()=>{
        this.cambiarCiudadEspejo=true;
      
     }, 400);
   
   }

   siguienteHome(home){
  this.home=home;
   }

}
