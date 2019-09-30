import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Linea } from '../model/lineas';
import { Equipo } from '../model/equipo';
import { Factura } from '../model/factura';
import { Plan } from '../model/plan';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private Url = 'http://localhost:8080/apilineas/lineas';
  private Url2 = 'http://localhost:8080/apipersonas/personas';
  private Url3 = 'http://localhost:8080/apiequipos/equipos';
  private Url4 = 'http://localhost:8080/apifacturas/facturas';
  private Url5 = 'http://localhost:8080/apiplan/plan';


  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor( private http: HttpClient ) {
    console.log('Servicio Lineas Telefonicas Funcionando');
  }


getPersonas(){
  return this.http.get<Persona[]>(this.Url2);
}

createPersonas(persona:Persona){
  return this.http.post<Persona>(this.Url2,persona);
}

createLinea(linea:Linea){
  return this.http.post<Linea>(this.Url,linea);
}

createEquipo(equipo:Equipo){
  return this.http.post<Equipo>(this.Url3,equipo);
}

generateFactura(factura:Factura){
  return this.http.post<Factura>(this.Url4,factura);
}

createTipoplan(plan:Plan){
  return this.http.post<Plan>(this.Url5,plan);
}


obtenerPersona(id: number): Observable<any> {
  return this.http.get<any>(`${this.Url}/${id}`);
}














  getCustomers(): Observable<Persona[]> {
    return this.http.get(this.Url).pipe(
      map(data => data as Persona[])
    );
  }

  getCustomer(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.Url}/${id}`);
  }

  createCustomer(customer: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.Url, customer, {headers: this.httpHeaders});
  }

  updateCustomer(customer: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.Url, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: string): Observable<Persona> {
    return this.http.delete<Persona>(`${this.Url}/${id}`, {headers: this.httpHeaders});
  }
}


