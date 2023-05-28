import { Component } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { Orden } from '../../interfaces/orden';
import { ExamenService } from '../../services/examen.service';
import { Examen } from '../../interfaces/examen';
import { elementAt } from 'rxjs';
import { PacientesService } from '../../services/pacientes.service';
import { TordenService } from '../../services/torden.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  constructor(private ord:OrdenService, private ex : ExamenService,private pac : PacientesService,private tord:TordenService){}

  listOrden: Orden[]=[];
  
  ngOnInit(){
    this.fetchOrden()
  }

  fetchOrden(){
    this.ord.getOrden().subscribe(data=>{
      this.listOrden = data
      console.warn(this.listOrden)

      this.listOrden.forEach(element=>{
        element.detalles.forEach(det=>{
          this.ex.getExamenById(det.idExamen.toString()).subscribe(data1=>{
            det.examen = data1.descripcion
          })      
        })

        this.pac.getPacById(element.idPaciente.toString()).subscribe(data2=>{
          element.paciente = data2.primerNombre +' ' +data2.segundoNombre + ' '+data2.primerApellido +' '+data2.segundoApellido
        })

        this.tord.getPacById(element.idTipoOrden.toString()).subscribe(data3=>{
          element.tipo_orden = data3.descripcion
        })
      })
    })
  }


}
