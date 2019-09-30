import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';
import { EditPersonaComponent } from './components/edit-persona/edit-persona.component';
import { ListPersonaComponent } from './components/list-persona/list-persona.component';
import { HomeComponent } from './home/home.component';
import { EditStatusComponent } from './edit-status/edit-status.component';
import { ListFacturaComponent } from './components/list-factura/list-factura.component';

const routes: Routes = [
   { path: 'add-persona', component: AddPersonaComponent },
    { path: 'edit-persona', component: EditPersonaComponent },
    { path: 'list-persona', component: ListPersonaComponent },
    { path: 'edit-status', component: EditStatusComponent },
    { path: 'list-factura', component: ListFacturaComponent },
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
