import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionComponent } from './componentes/clasificacion/clasificacion.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { ReparacionesComponent } from './componentes/reparaciones/reparaciones.component';
import { CrearEquipoComponent } from './componentes/crear-equipo/crear-equipo.component';
import { VerReparacionComponent } from './componentes/ver-reparacion/ver-reparacion.component';
import { ModReparacionComponent } from './componentes/mod-reparacion/mod-reparacion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EquipoDetallesComponent } from './componentes/equipo-detalles/equipo-detalles.component';
import { RecambioComponent } from './componentes/recambio/recambio.component';
import { ComparativaComponent } from './componentes/comparativa/comparativa.component';


const appRoutes: Routes = [
  { path: 'reparaciones', component: ReparacionesComponent },
  { path: 'editarReparacion/:idReparacion', component : ModReparacionComponent },
  { path: '', redirectTo: 'login' ,pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./componentes/dashboard/dashboard.module').then(m => m.DashboardModule) }, //carga perezosa, solo carga el modulo cuando se necesita
  { path: 'home', component: HomeComponent },
  { path: 'editarEquipo/:idEscuderia', component: CrearEquipoComponent },
  { path: 'equipoDetalle/:idEscuderia', component: EquipoDetallesComponent },
  { path: 'recambios/:idEscuderia', component : RecambioComponent },
  { path: 'comparativa/:idEscuderia', component : ComparativaComponent  },
  


  //{ path: '**', redirectTo: 'login', pathMatch: 'full' }, //redirecciona a la ruta por defecto
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
