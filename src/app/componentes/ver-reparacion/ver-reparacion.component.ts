import { Component, OnInit } from '@angular/core';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import { ClaseReparaciones } from 'src/app/models/reparacion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-reparacion',
  templateUrl: './ver-reparacion.component.html',
  styleUrls: ['./ver-reparacion.component.css']
})
export class VerReparacionComponent implements OnInit {
ReparacionObject: ClaseReparaciones[] = [];
reparacion:any
  constructor(private FormulaOneService : FormulaOneService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getReparacionesApi();
  }
  getReparacionesApi() {
    this.FormulaOneService.getReparacionesApi().subscribe((reparacion: any) => {
      console.log(reparacion);
      this.ReparacionObject = reparacion.map((x:any )=> 
      new ClaseReparaciones(
       x._idReparacion,
       x._idIngeniero, 
       x._idPieza,
       x._idCoche,
       x._cantidad,
       x._fecha,
       x._estado
    ));
    //console.log(this.ReparacionObject)

    this.reparacion = this.ReparacionObject;
    });

}

removeReparacion(id: any) {
  this.FormulaOneService.eliminarReparacion(id).subscribe((data:any) => {
    this.toastr.error('Reparacion eliminada', 'Reparacion eliminada');
    this.getReparacionesApi();
    },
    (error: any) => {
      console.log(error);
    });

}

}
