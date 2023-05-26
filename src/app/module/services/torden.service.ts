import { Injectable } from '@angular/core';
import { Torden } from "../interfaces/torden";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TordenService {
  private torden: Torden[]=[{IdTipoOrden:0,Descripcion:""}]
  private url ="https://localhost:8080/torden"
  constructor(private http:HttpClient) { }
  
  public getFrase():Observable<Torden[]>{
    return this.http.get<Torden[]>(this.url);
  }
}
