import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionComponent } from '../clasificacion/clasificacion.component';
import { CrearEquipoComponent } from '../crear-equipo/crear-equipo.component';
import { EquiposComponent } from '../equipos/equipos.component';
import { RecambioComponent } from '../recambio/recambio.component';
import { VerReparacionComponent } from '../ver-reparacion/ver-reparacion.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent, children : [
    {path: 'equipos', component: EquiposComponent},
    {path: 'crearEquipos', component: CrearEquipoComponent},

    { path: 'listarReparaciones', component: VerReparacionComponent },
    { path: 'puntos', component: ClasificacionComponent },
    { path: 'recambios', component : RecambioComponent },   

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
