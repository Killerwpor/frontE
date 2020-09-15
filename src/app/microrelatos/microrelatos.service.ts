import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MicrorelatosService {

  constructor(private http: HttpClient) { }


  private url: string = "http://127.0.0.1:3000/api/microRelatos";

  private httpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });

  postChartPanel(data: any): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.url, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }


}
