import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../interfaces/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private url ="http://localhost:8084/api/perfil"

  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }

  constructor(private http: HttpClient) { }
  
  public getPerfiles():Observable<Perfil[]>{
    return this.http.get<Perfil[]>(this.url, {headers: this.httpOption});
  }
}
