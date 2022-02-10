import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipoSchema } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormulaOneService {
  private urlAPI = 'http://localhost:3000';

  // Está subida a heroku:
  //private urlAPI = 'https://formula-one-restapi.herokuapp.com/equipos';

  constructor(private http: HttpClient) {}

  getPuntosApi() : Observable<any>{
    return this.http.get(this.urlAPI+'/getPuntosPilotos');
  }

  getEquiposApi() : Observable<any> { 
    return this.http.get(this.urlAPI+'/equipos');
  }

  getEquipo(id: string) : Observable<any> {
    return this.http.get(this.urlAPI + '/equipos/' + id, {responseType: 'text'});
  }

  getRecambiosApi() : Observable<any> {
    return this.http.get(this.urlAPI + '/recambios');
  }

  getPrecioReparacion(idEscuderia: string) : Observable<any> {
    return this.http.get(this.urlAPI + '/precioRecambios/' + idEscuderia);
  }

  getSalarios(idEscuderia:string) : Observable<any> {
    return this.http.get(this.urlAPI + '/salarios/'+ idEscuderia);
  }

  getEquipoById(id: string) : Observable<any> {
    return this.http.get(this.urlAPI + '/equipo/' + id);
  }
  


  addReparacion(doc: any) {
    return this.http.put(this.urlAPI + '/reparacionGorda', doc, {responseType: 'text'});
  }

  crearEquipo(doc: any) : Observable<any> {
    return this.http.post(this.urlAPI + '/equipo', doc, {responseType: 'text'});
  }

  eliminarEquipo(idEscuderia: string) : Observable<any> {
   return this.http.delete(this.urlAPI + '/equipo/' + idEscuderia, {responseType: 'text'});
  }

  eliminarRecambio(idPieza: string) : Observable<any> {
    return this.http.delete(this.urlAPI + '/recambio/' + idPieza, {responseType: 'text'});
  }

  editarEquipo(id: string , equipo: EquipoSchema) : Observable<any> {
    return this.http.put(this.urlAPI + '/equipo/' + id,  equipo, {responseType: 'text'});
  }

  editarReparacion(id: string, reparacion: any) : Observable<any> {
    return this.http.put(this.urlAPI + '/reparacion/' + id, reparacion, {responseType: 'text'});
  }


  getReparacionesApi() : Observable<any> {
    return this.http.get(this.urlAPI + '/reparaciones');
  }

  getReparacion(id: string) : Observable<any> {
    return this.http.get(this.urlAPI + '/reparacion/' + id);
  }



}