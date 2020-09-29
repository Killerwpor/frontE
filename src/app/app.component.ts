import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void { 

    
  }

  home: String="home1";

  navegador="fisuras";

  title = 'Ciudad Espejo';  
 

  funcionNavegador(lugar: string){
    if(lugar=="home"){
      this.home="home3";
    }
    this.navegador=lugar;
  }

}
