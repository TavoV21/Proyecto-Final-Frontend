import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styles: []
})
export class ListPersonaComponent implements OnInit {
  persona: Persona[];

  constructor(private router: Router, private service: PersonaService) {}

  ngOnInit() {
    //this.service.getCustomers().subscribe(data => (this.persona = data));
    this.service.getPersonas().subscribe(data=>{
      this.persona=data;
    })
  }

  //deleteCustomer(persona: Persona): void {
    // swal.fire({
      // title: 'Está seguro?',
     //  text: `¿Seguro desea eliminar al cliente ${persona.nombre} ${
       //  persona.apellido
      // }?`,
      // type: 'warning',
      // showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      // confirmButtonText: 'Si, eliminar!',
      // cancelButtonText: 'Cancelar'
     //}).then(result => {
      // if (result.value) {
        // this.service.deleteCustomer(persona.cedula).subscribe(data => {
         //  this.persona = this.persona.filter(c => c !== persona);
       //  });

       //  swal.fire('Eliminado!', 'Se ha eliminado el cliente.', 'success');
      // }
   //  });
  // }

  editCustomer(persona: Persona): void {
    localStorage.removeItem('editCustomerId');
    localStorage.setItem('editCustomerId', persona.cedula.toString());
    this.router.navigate(['edit-persona']);
  }

  addCustomer(): void {
    this.router.navigate(['add-persona']);
  }
}

