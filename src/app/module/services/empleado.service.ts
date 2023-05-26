import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url ="http://localhost:8088/api/empleados"
  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }

  constructor(private http: HttpClient) { }

  public getEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url, {headers: this.httpOption});
  }
}
