import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';
import { EditPersonaComponent } from './components/edit-persona/edit-persona.component';
import { ListPersonaComponent } from './components/list-persona/list-persona.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EditStatusComponent } from './edit-status/edit-status.component';
import { ListFacturaComponent } from './components/list-factura/list-factura.component';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonaComponent,
    EditPersonaComponent,
    ListPersonaComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EditStatusComponent,
    ListFacturaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    

  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
