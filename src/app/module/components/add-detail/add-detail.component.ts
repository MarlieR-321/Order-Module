import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Perfil } from '../../interfaces/perfil';
import { Examen } from '../../interfaces/examen';
import { ExamenService } from '../../services/examen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenDetalle } from '../../interfaces/orden-detalle';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent{
  form: any;

  constructor(
    private perf:PerfilService,
    private ex:ExamenService,
    private formBuilder:FormBuilder){}

  listPerfil: Perfil[]=[]
  listIndex: string[]=[];
  listExamenes: Examen[]=[]
  //listExamSelect:Examen[]=[]
  listExamSelect:OrdenDetalle[]=[]
  
  @Output() newItemEvent = new EventEmitter<OrdenDetalle[]>();

  getValues(){
    console.log(this.listExamSelect)
    if(this.form?.value.examenes !== ""){

      this.form?.value.examenes.forEach((id:Number)=>{
        let ordena:OrdenDetalle = {examen: null,idOrden:null,activo:'S',idExamen:id}
        this.listExamSelect.push(ordena)
      })
    }

    this.newItemEvent.emit(this.listExamSelect)
  }
  
  initExamenByPerfil(){
    this.listIndex = []
    this.listExamSelect =[]

    if(this.form?.value.examenes !==""){
      this.form?.value.examenes.forEach((item:string)=>{
        this.listIndex.push(item.split('-')[1])
      })
    }

    this.form?.value.perfil.forEach((item:string)=>{
      this.listExamenes.forEach((exam:Examen)=>{
        if(exam.idPerfil === Number(item)){
          let ordena:OrdenDetalle = {examen: null,idOrden:null,activo:'S',idExamen:exam.idExamen}
          this.listExamSelect.push(ordena)
        }
      })
      
      
      console.log(this.listExamSelect)
    })
    
  }


  addExamen(){
    
  }

  ngOnInit(){
    this.initForm()
    this.fetchPerfil();
    this.fetchExamen();
  }
  
  initForm(){
    this.form  = this.formBuilder.group({
      perfil:['',[Validators.required]],
      examenes:['',[Validators.required]]
    })
  }

  fetchPerfil(){
    this.perf.getPerfiles().subscribe(data=>{
      this.listPerfil = data
      
    })
  }

  fetchExamen(){
    this.ex.getPerfiles().subscribe(data=>{
      this.listExamenes = data
      //console.log(this.listExamenes)
    })
  }

}
