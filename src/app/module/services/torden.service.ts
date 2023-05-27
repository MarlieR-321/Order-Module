import { Injectable } from '@angular/core';
import { Torden } from "../interfaces/torden";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TordenService {
  private torden: Torden[]=[{idTipoOrden:0,descripcion:""}]
  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }  
  private url ="http://localhost:8090/api/tipo_orden"

  
  constructor(private http:HttpClient) { }
  
  public getFrase():Observable<Torden[]>{
    return this.http.get<Torden[]>(this.url);
  }
  public getPacById(id:String):Observable<Torden>{
    return this.http.get<Torden>(this.url+'/'+id, {headers: this.httpOption});
  }
}
