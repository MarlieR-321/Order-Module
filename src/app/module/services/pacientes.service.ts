import { Injectable } from '@angular/core';
import { Pacientes } from "../interfaces/pacientes";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PacientesService {
  private pac = {activo: "", direcciondomiciliar:"",emabrazada:"",fallecido:"",email:"",fechaNac:"",iddepartamentonac:1,iddepartamentores:2,idestadocivil: 2,ididentificacion:0,idmunicipionac:0,idmunicipiores:0, idnacionalidad:0,idPaciente:0,idpaisnac:0,idpaisres:0,idprofesiones:0,idReligion:0,idSexo:0,idTipoSangre:0,numexpediente:0,numIdentificacion:"",NumINSS:"",primerApellido:"Juan",primerNombre:"Juan",segundoApellido:"",segundoNombre:"",telefonodomiciliar:"",telefonomovil:""}
  private paciente: Pacientes[] = [this.pac];

  private url ="http://localhost:8082/api/paciente"

  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }  

  constructor(private http: HttpClient) { }

  public getFrase():Observable<Pacientes[]>{
    return this.http.get<Pacientes[]>(this.url, {headers: this.httpOption});
  }

  public getPacById(id:String):Observable<Pacientes>{
    return this.http.get<Pacientes>(this.url+'/'+id, {headers: this.httpOption});
  }

}
