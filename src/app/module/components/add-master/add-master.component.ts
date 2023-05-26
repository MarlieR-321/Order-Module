import { Component, Input, OnInit } from '@angular/core';
import { Pacientes } from '../../interfaces/pacientes';
import { PacientesService } from '../../services/pacientes.service';
import { MatSelectModule } from '@angular/material/select';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TipoSangreService } from '../../services/tipo-sangre.service';
import { ReligionService } from '../../services/religion.service';


@Component({
  selector: 'app-add-master',
  templateUrl: './add-master.component.html',
  styleUrls: ['./add-master.component.css']
})
export class AddMasterComponent implements OnInit{
  
  
  //selectFormControl = new FormControl('', Validators.required);


  constructor(private pac:PacientesService, private sang:TipoSangreService, private rel:ReligionService){}
  
  listPacientes: Pacientes[] =[];
  selected = '';
  //Visible
  sexo=''
  religion=''
  tsangre =''
  estado=''
  currentpac:Pacientes = {activo: "", direcciondomiciliar:"",emabrazada:"",fallecido:"",email:"",fechaNac:"",iddepartamentonac:1,iddepartamentores:2,idestadocivil: 2,ididentificacion:0,idmunicipionac:0,idmunicipiores:0, idnacionalidad:0,idPaciente:0,idpaisnac:0,idpaisres:0,idprofesiones:0,idReligion:0,idSexo:0,idTipoSangre:0,numexpediente:0,numIdentificacion:"",NumINSS:"",primerApellido:"",primerNombre:"",segundoApellido:"",segundoNombre:"",telefonodomiciliar:"",telefonomovil:""}
  
 // animalControl = new FormControl<Pacientes>(this.listPacientes[1]);
  
  ngOnInit(){
    //this.onChange()
    this.fetchPaciente();
  }

  onChange(e:any){
    this.selected = e.value;
    this.fetchPacienteById( this.selected);
    
  }
  
  //FETCH FROM API
  fetchPaciente(){
    this.pac.getFrase().subscribe(data=>{
      this.listPacientes = data
      console.log(this.listPacientes)
    })
  }

  fetchPacienteById(id:String){
    this.pac.getPacById(id).subscribe(data=>{
      this.currentpac = data

      //Change from number to String
      if(this.currentpac.idSexo ==1){
        this.sexo = 'Masculino';
      }else{
        this.sexo = 'Femenino';
      }

      //Set relevant state
      if(this.currentpac.activo === 'S'){
        this.estado = 'Activo'
      }

      if(this.currentpac.emabrazada ==='S'){
        this.estado = 'Embarazada'
      }

      if(this.currentpac.fallecido === 'S'){
        this.estado= 'Fallecido'
      }

      //SET TIPO SANGRE 
      this.sang.getPacById(this.currentpac.idTipoSangre.toString()).subscribe(data=>{
        this.tsangre=data.descripcion.toString()
      })

      //SET RELIGION
      this.rel.getPacById(this.currentpac.idReligion.toString()).subscribe(data=>{
        this.religion=data.descripcion.toString()
      })
    })

    
  }
}
