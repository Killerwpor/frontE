import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void { 

    
  }


  navegador="autores";

  title = 'test';  
 

  funcionNavegador(lugar: string){
    this.navegador=lugar;
  }

}
