import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { ClasificacionComponent } from './componentes/clasificacion/clasificacion.component';

import { SharedModule } from './componentes/shared/shared.module';

import { RecambioComponent } from './componentes/recambio/recambio.component';
import { ReparacionesComponent } from './componentes/reparaciones/reparaciones.component';
import { FormulaOneService } from './services/formulaOne.service';
import { CrearEquipoComponent } from './componentes/crear-equipo/crear-equipo.component';
import { BrowserModule } from '@angular/platform-browser';

import { VerReparacionComponent } from './componentes/ver-reparacion/ver-reparacion.component';
import { ModReparacionComponent } from './componentes/mod-reparacion/mod-reparacion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipoDetallesComponent } from './componentes/equipo-detalles/equipo-detalles.component';




@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    ClasificacionComponent,
    RecambioComponent,
    ReparacionesComponent,
    CrearEquipoComponent,
    VerReparacionComponent,
    ModReparacionComponent,
    HomeComponent,
    LoginComponent,
    EquipoDetallesComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,

  ],
  providers: [
    FormulaOneService,
    { provide: APP_BASE_HREF, useValue: '/f1' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
