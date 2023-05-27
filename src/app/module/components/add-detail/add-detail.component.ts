import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Perfil } from '../../interfaces/perfil';
import { Examen } from '../../interfaces/examen';
import { ExamenService } from '../../services/examen.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent{
  
 

  constructor(
    private perf:PerfilService,
    private ex:ExamenService){}

  listPerfil: Perfil[]=[]
  
  listExamenes: Examen[]=[]
  
  ngOnInit(){
    this.fetchPerfil();
    this.fetchExamen();
  }

  fetchPerfil(){
    this.perf.getPerfiles().subscribe(data=>{
      this.listPerfil = data
      
    })
  }

  fetchExamen(){
    this.ex.getPerfiles().subscribe(data=>{
      this.listExamenes = data
      console.log(this.listExamenes)
    })
  }

}
