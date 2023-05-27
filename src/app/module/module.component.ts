import { Component, ViewChild } from '@angular/core';
import { AddMasterComponent } from './components/add-master/add-master.component';
import { Orden } from './interfaces/orden';
import { OrdenDetalle } from './interfaces/orden-detalle';
import { OrdenService } from './services/orden.service';

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
    console.log(this.orden)
    this.serv.addOrden(this.orden)
  }

}
