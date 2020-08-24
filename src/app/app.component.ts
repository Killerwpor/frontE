import { Component } from '@angular/core';

import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';  
  permitirScroll=false;
  permitirMapa=false;
 
  arrancarAnimacion(){
    $(".ciudadEspejo").addClass("animate__animated animate__fadeOut");
    setTimeout(()=>{
      this.permitirScroll=true;
      setTimeout(()=>{
        this.permitirMapa=true;
      }, 24500);
    }, 1500);

    
  }

}
