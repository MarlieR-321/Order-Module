import { Component, ViewChild } from '@angular/core';
import { AddMasterComponent } from './components/add-master/add-master.component';
import { Orden } from './interfaces/orden';
import { OrdenDetalle } from './interfaces/orden-detalle';
import { OrdenService } from './services/orden.service';
import { OrdenEnv } from './interfaces/orden-env';
import { OrdenDetalleEnv } from './interfaces/orden-detalle-env';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  getValues(val:any){
    //console.warn(val)
  }

  constructor (private serv:OrdenService){}
  
  orden:Orden = {activo:"S",asistencia:'',detalles:[],fechaImprime:'',fechaOrden:'',idEmpleado:0,idPaciente:0,idTipoOrden:0,idTipoServicio:0,n_order:null,observaciones:'',paciente:null,tipo_orden:null};
  ord:OrdenEnv ={N_Orden:'',fechaOrden:'',activo:'',asistencia:'',detalles:[],fechaImprime:'',idEmpleado:0,idPaciente:0,idTipoOrden:0,idTipoServicio:0,observaciones:''};
  ngAfterViewInit(){
    //this.orden = this.ordenObj.value
    //console.warn(this.orden)
  }
  
  setOrden(param:Orden){
    this.orden = param
    console.warn(this.orden)
  }
  setDetalle(param:OrdenDetalle[]){
    this.orden.detalles = param
    console.warn(this.orden)
  }

  save(){
    
    let det = this.orden.detalles
    let send:OrdenDetalleEnv[] = []
    

    det.forEach(element => {
      let sendSing:OrdenDetalleEnv = {idExamen:element.idExamen, activo: 'S', N_Orden:'0'}
      send.push(sendSing)
    });

    this.ord = {
      activo:this.orden.activo,
      asistencia:this.orden.asistencia,
      fechaImprime:this.orden.fechaImprime,
      idEmpleado:this.orden.idEmpleado,
      idPaciente:this.orden.idPaciente,
      idTipoOrden:this.orden.idTipoOrden,
      idTipoServicio:this.orden.idTipoServicio,
      observaciones:this.orden.observaciones,
      fechaOrden:this.orden.fechaOrden,
      N_Orden:'0',
      detalles:send,
    }

    this.serv.addOrden(this.ord)
    console.log(this.ord)
    console.log(JSON.stringify(this.ord))
  }

}
