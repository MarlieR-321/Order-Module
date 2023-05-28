import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orden } from '../interfaces/orden';
import { Observable } from 'rxjs';
import { OrdenEnv } from '../interfaces/orden-env';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private url ="http://localhost:8083/api/orden"

  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }  

  constructor(private http: HttpClient) { }

  public getOrden():Observable<Orden[]>{
    return this.http.get<Orden[]>(this.url, {headers: this.httpOption});
  }

  public addOrden(orden:OrdenEnv){
    this.http.post<OrdenEnv>(this.url, JSON.stringify(orden),{headers: this.httpOption}).subscribe(a=>{})
  }
}
