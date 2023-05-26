import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoSangre } from '../interfaces/tipo-sangre';

@Injectable({
  providedIn: 'root'
})
export class TipoSangreService {
  private url ="http://localhost:8086/api/tsangre"

  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }
  constructor(private http: HttpClient) { }

  public getPacById(id:String):Observable<TipoSangre>{
    return this.http.get<TipoSangre>(this.url+'/'+id, {headers: this.httpOption});
  }
}
