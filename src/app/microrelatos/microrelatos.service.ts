import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MicrorelatosService {

  constructor(private http: HttpClient) { }


  // private urlGenerar: string = "http://127.0.0.1:3000/api/microRelatos/generarMicroRelato";
  // private urlGuardar: string = "http://127.0.0.1:3000/api/microRelatos/guardarMicroRelato";
  // private urlTraer: string = "http://127.0.0.1:3000/api/microRelatos/traerMicroRelatos";

  private urlGenerar: string = "http://ec2-18-220-134-88.us-east-2.compute.amazonaws.com/api/api/microRelatos/generarMicroRelato";
  private urlGuardar: string = "http://ec2-18-220-134-88.us-east-2.compute.amazonaws.com/api/api/microRelatos/guardarMicroRelato";
  private urlTraer: string = "http://ec2-18-220-134-88.us-east-2.compute.amazonaws.com/api/api/microRelatos/traerMicroRelatos";


  private httpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });

  generarMicroRelato(data: any): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlGenerar, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }

  
  guardarMicroRelato(data: any): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlGuardar, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }

  traerMicroRelatos(): Observable<any> {       
        return this.http.get<any>(this.urlTraer);    
  }


}
