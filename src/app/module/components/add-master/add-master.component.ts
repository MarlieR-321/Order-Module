import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pacientes } from '../../interfaces/pacientes';
import { PacientesService } from '../../services/pacientes.service';
import { TipoSangreService } from '../../services/tipo-sangre.service';
import { ReligionService } from '../../services/religion.service';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../interfaces/empleado';
import { TServicioService } from '../../services/tservicio.service';
import { Tservicio } from '../../interfaces/tservicio';
import { Torden } from '../../interfaces/torden';
import { TordenService } from '../../services/torden.service';
import { Orden } from '../../interfaces/orden';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-master',
  templateUrl: './add-master.component.html',
  styleUrls: ['./add-master.component.css']
})
export class AddMasterComponent implements OnInit{
  
  constructor(
    private pac:PacientesService, 
    private sang:TipoSangreService, 
    private rel:ReligionService,
    private empl:EmpleadoService,
    private tserv:TServicioService,
    private torden:TordenService
    ){}
  
  listPacientes: Pacientes[] =[];
  listEmpleados:Empleado[]=[]
  listTServicio:Tservicio[]=[]
  listTOrden: Torden[]=[]

  selected = '';
  //Visible
  sexo=''
  religion=''
  tsangre =''
  estado=''
  currentpac:Pacientes = {activo: "", direcciondomiciliar:"",emabrazada:"",fallecido:"",email:"",fechaNac:"",iddepartamentonac:1,iddepartamentores:2,idestadocivil: 2,ididentificacion:0,idmunicipionac:0,idmunicipiores:0, idnacionalidad:0,idPaciente:0,idpaisnac:0,idpaisres:0,idprofesiones:0,idReligion:0,idSexo:0,idTipoSangre:0,numexpediente:0,numIdentificacion:"",NumINSS:"",primerApellido:"",primerNombre:"",segundoApellido:"",segundoNombre:"",telefonodomiciliar:"",telefonomovil:""}
  
  ordenObj:Orden = {activo:"S",asistencia:'',detalles:[],fechaImprime:'',fechaOrden:null,idEmpleado:0,idPaciente:0,idTipoOrden:0,idTipoServicio:0,n_order:null,observaciones:'',paciente:null,tipo_orden:null}
  
  @Output() newItemEvent = new EventEmitter<Orden>();
  
  pipe = new DatePipe('en-US');

  ngOnInit(){
    //this.onChange()
    this.fetchPaciente();
    this.fetchEmpleado();
    this.fetchTServicio();
    this.fetchTOrden();
  }

  //FORM SECTION
  getValues(val:any){
    //console.warn(val)

    //Set Values
    
    if(val.asistencia ===true){
      this.ordenObj.asistencia = 'S'
    }else{
      this.ordenObj.asistencia = 'N'
    }

    this.ordenObj.idEmpleado = val.empleado
    this.ordenObj.idPaciente = val.paciente
    this.ordenObj.idTipoOrden = val.torden
    this.ordenObj.idTipoServicio = val.servicio
    this.ordenObj.observaciones = val.observaciones

    this.generateDate()
    this.ordenObj.fechaImprime = this.changedDate
    this.ordenObj.fechaOrden = this.changedDate2

    this.newItemEvent.emit(this.ordenObj)
    //console.warn(this.ordenObj)
  }

  changedDate:string |null= "";
  changedDate2:string |null= "";
  //END FORM SECTION`
  generateDate(){
    var today = new Date();
    

    let ChangedFormat = this.pipe.transform(today, 'YYYY-MM-dd hh:mm:ss');
    let ChangedFormat2 = this.pipe.transform(today, 'YYYY-MM-dd');
    this.changedDate = ChangedFormat;
    this.changedDate2 = ChangedFormat2;
    //console.log(this.changedDate);
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

  fetchEmpleado(){
    this.empl.getEmpleados().subscribe(data=>{
      this.listEmpleados = data
    })
  }

  fetchTServicio(){
    this.tserv.getFrase().subscribe(data=>{
      this.listTServicio = data
    })
  }

  fetchTOrden(){
    this.torden.getFrase().subscribe(data=>{
      this.listTOrden = data
    })
  }

  //CONFIG PSEUDO-TABLE
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
