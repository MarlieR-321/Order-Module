import { Injectable } from '@angular/core';
import { Pacientes } from "../interfaces/pacientes";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PacientesService {
  private paciente: Pacientes[] = [{Activo: "s", DireccionDomiciliar:"",Emabrazada:"",Fallecido:"",Email:"",FechaNac:"",IdDepartamentoNac:1,IdDepartamentoRes:2,IdEstadoCivil: 2,IdIdentificacion:0,IdMunicipioNac:0,IdMunicipioRes:0, IdNacionalidad:0,IdPaciente:0,IdPaisNac:0,IdPaisRes:0,IdProfesiones:0,idReligion:0,IdSexo:0,IdTipoSangre:0,NumExpediente:0,NumIdentificacion:"",NumINSS:"",PrimerApellido:"Juan",PrimerNombre:"Juan",SegundoApellido:"",SegundoNombre:"",TelefonoDomiciliar:"",TelefonoMovil:""}];
  private url ="https://localhost:8080/paciente"

  constructor(private http: HttpClient) { }

  public getFrase():Observable<Pacientes[]>{
    return this.http.get<Pacientes[]>(this.url);
  }
}
