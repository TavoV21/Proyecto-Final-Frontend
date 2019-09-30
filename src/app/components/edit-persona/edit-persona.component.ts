import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styles: []
})
export class EditPersonaComponent implements OnInit {

  customer: Persona;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: PersonaService) { }

  ngOnInit() {

    const customerId = localStorage.getItem('editCustomerId');

    if ( !customerId ) {
      alert('Acción invalida');
      this.router.navigate(['list-persona']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.service.getCustomer(+customerId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-persona']);
        swal.fire({
          position: 'top',
          type: 'success',
          title: `Cliente modificado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}