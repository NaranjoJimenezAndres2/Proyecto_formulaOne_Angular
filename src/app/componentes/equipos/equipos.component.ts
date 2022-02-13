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


