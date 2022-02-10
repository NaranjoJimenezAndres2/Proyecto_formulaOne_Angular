import { Component, OnInit } from '@angular/core';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import { ClaseEquipo } from 'src/app/models/equipos';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
})
export class EquiposComponent implements OnInit {
  equipos: any;
  EquiposObject: ClaseEquipo[]=[ ];

  constructor(private formulaOneService: FormulaOneService,
    private toastr: ToastrService

 
    
    ) { }

  ngOnInit(): void {
    this.getEquiposApi();
  }

  getEquiposApi() {
    this.formulaOneService.getEquiposApi().subscribe((equipos:any) => {
      console.log(equipos);
     this.EquiposObject = equipos.map((x:any )=> 
     new ClaseEquipo(
       x._idEscuderia,
       x._nombre, 
       x._pais,
       x._motorDistribuidor,
       x._presupuesto,
       x._escudo)
      );
      //console.log(this.EquiposObject);

      this.EquiposObject.forEach(element => {
        element.setEscudo();
      }
      );
      this.equipos = this.EquiposObject;
    });
  }

/*
  eliminarEquipo2(idEscuderia: any) {
    this.formulaOneService.eliminarEquipo(idEscuderia).subscribe(() => {
      console.log('eliminado');
      this.getEquiposApi();
    });
  }*/

  removeEquipo(id: any) {
    this.formulaOneService.eliminarEquipo(id).subscribe(data => {
      this.toastr.error('Equipo eliminado', 'Equipo eliminado');
      this.getEquiposApi();
      },
      error => {
        console.log(error);
      });
  
}



}


/*<p>HOLA works!</p>
<div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header text-center">
          <h3 class="card-title">EQUIPOS</h3>
          <button class="btn btn-primary" (click)="nuevoEquipo()">Nuevo Equipo</button>
        </div>
        <div class="card-body">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID Escuderia</th>
                <th>Nombre</th>
                <th>Pais</th>
                <th>Motor</th>
                <th>Presupuesto</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let equipo of EquiposObject">
                <td>{{equipo.idEscuderia}}</td>
                <td>{{equipo.nombre}}</td>
                <td>{{equipo.pais}}</td>
                <td>{{equipo.motorDistribuidor}}</td>
                <td>{{equipo.presupuesto}}</td>
                <td><img src="{{equipo.escudo}}" alt=""></td>
                <td>
                  <button class="btn btn-warning" (click)="editarEquipo(equipo)">Editar</button>
                  <button class="btn btn-danger" (click)="eliminarEquipo(equipo)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>*/