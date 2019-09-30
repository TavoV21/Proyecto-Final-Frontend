import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-list-factura',
  templateUrl: './list-factura.component.html',
  styleUrls: ['./list-factura.component.css']
})
export class ListFacturaComponent implements OnInit {

cedula:number;
persona:Persona[];

  constructor(private service: PersonaService) { }

  ngOnInit() {
  }

  ConsultarPersona(){
    this.persona=[];
    this.service.obtenerPersona(this.cedula).subscribe(date=>{
      this.persona=date;
console.log("realizado");
    }
    )
  }

  onSubmit(){
    this.ConsultarPersona;
  }

}
