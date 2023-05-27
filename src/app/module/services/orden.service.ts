import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orden } from '../interfaces/orden';
import { Observable } from 'rxjs';

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

}
