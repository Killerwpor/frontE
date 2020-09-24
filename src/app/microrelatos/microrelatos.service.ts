import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class MicrorelatosService {

  constructor(private http: HttpClient) { }


  private urlGenerar: string = "http://127.0.0.1:3000/api/microRelatos/generarMicroRelato";
  private urlGuardar: string = "http://127.0.0.1:3000/api/microRelatos/guardarMicroRelato";
  private urlTraer: string = "http://127.0.0.1:3000/api/microRelatos/traerMicroRelatos";

  // private urlGenerar: string = "http://ec2-18-220-134-88.us-east-2.compute.amazonaws.com/api/api/microRelatos/generarMicroRelato";
  // private urlGuardar: string = "http://ec2-18-220-134-88.us-east-2.compute.amazonaws.com/api/api/microRelatos/guardarMicroRelato";
  // private urlTraer: string = "http://ec2-18-220-134-88.us-east-2.compute.amazonaws.com/api/api/microRelatos/traerMicroRelatos";


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

async uploadFile(file) {
    var respuesta;
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIA2Z4IXMV3F4PYBGGX',
              secretAccessKey: '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',
              region: 'us-east-1'
          }
      );
      const params = {
          Bucket: 'imagenes-generadas',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
    await  bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
        respuesta=data;
      });
      return respuesta;
}

 async guardarAux(data) {
  const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
return this.http.post<any>(this.urlGuardar, body.toString(), {
    headers: this.httpHeaders 
  })
}


}
