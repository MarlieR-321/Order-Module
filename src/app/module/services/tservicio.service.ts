import { Injectable } from '@angular/core';
import { Tservicio } from "../interfaces/tservicio";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TServicioService {
  private tservicio: Tservicio[]=[{idTipoServicio:0,descripcion:""}]
  private url ="http://localhost:8089/api/tipo_servicio"
  constructor(private http:HttpClient) { }
  
  public getFrase():Observable<Tservicio[]>{
    return this.http.get<Tservicio[]>(this.url);
  }
}
