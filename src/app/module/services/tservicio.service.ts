import { Injectable } from '@angular/core';
import { Tservicio } from "../interfaces/tservicio";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TordenService {
  private tservicio: Tservicio[]=[{IdTipoServicio:0,Descripcion:""}]
  private url ="https://localhost:8080/tservicio"
  constructor(private http:HttpClient) { }
  
  public getFrase():Observable<Tservicio[]>{
    return this.http.get<Tservicio[]>(this.url);
  }
}
