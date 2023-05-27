import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../interfaces/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private url ="http://localhost:8085/api/examen"

  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }

  constructor(private http: HttpClient) { }
  
  public getPerfiles():Observable<Examen[]>{
    return this.http.get<Examen[]>(this.url, {headers: this.httpOption});
  }

}
