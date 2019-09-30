import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService} from '../../services/persona.service';
import swal from 'sweetalert2';
import { Persona } from 'src/app/model/persona';
import { Linea } from 'src/app/model/lineas';
import { Equipo } from 'src/app/model/equipo';
import { Factura } from 'src/app/model/factura';
import { Plan } from 'src/app/model/plan';


@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styles: []
})
export class AddPersonaComponent implements OnInit {

  persona:Persona=new Persona();
  linea:Linea=new Linea();
  equipo:Equipo=new Equipo();
  factura:Factura=new Factura();
  plan:Plan=new Plan();

  constructor(private formBuilder: FormBuilder, private router: Router, private service: PersonaService) { }


  ngOnInit() {
    
  }



GuardarTodo(){
  this.service.createPersonas(this.persona).subscribe(date=>{
    console.log("persona creada!!!")
        });

  this.service.createLinea(this.linea).subscribe(data=>{
    console.log("linea creada!!!")     
        });     

  this.service.createEquipo(this.equipo).subscribe(data=>{
    console.log("equipo creado!!!")        
        });

  this.service.generateFactura(this.factura).subscribe(data=>{
    console.log("factura generada!!!")        
        });   
  
  this.service.createTipoplan(this.plan).subscribe(data=>{
    console.log("tipo plan creado!!!")        
        });   
    
    
        swal.fire({
          position: 'top',
          type: 'success',
          title: `Registro Exitoso!!!`,
          showConfirmButton: false,
          timer: 2500
        }); 
        this.router.navigate(['home']);

       

}


}