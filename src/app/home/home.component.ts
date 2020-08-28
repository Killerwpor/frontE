import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';

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

  home: String="home1";
  topPosition: number=0;
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

 


   siguienteHome(home){
    this.topPosition=0; //se reinicia la barra scroll del home2
  this.home=home;
   }

   @HostListener("window:scroll", ["$event"])
onWindowScroll() {
  $(".ciudadEspejo2").addClass("animate__animated animate__fadeOut");
  
  setTimeout(()=>{
     this.cambiarCiudadEspejo=true;
   
  }, 400);
//In chrome and some browser scroll is given to body tag
let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
let max = document.documentElement.scrollHeight;
// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
//alert(pos);
 if(pos == max )   {
 alert("botton");
 }
}

}
