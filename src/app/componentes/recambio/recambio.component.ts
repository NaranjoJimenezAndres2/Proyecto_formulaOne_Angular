import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClaseRecambios } from 'src/app/models/recambio';
import { FormulaOneService } from 'src/app/services/formulaOne.service';

@Component({
  selector: 'app-recambio',
  templateUrl: './recambio.component.html',
  styleUrls: ['./recambio.component.css']
})
export class RecambioComponent implements OnInit {

RecambiosObject: ClaseRecambios [] = [];
recambio:any

  constructor(private formulaOneService: FormulaOneService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRecambiosApi()
  }


  getRecambiosApi() {
    this.formulaOneService.getRecambiosApi().subscribe((recambios:any) => {
      console.log(recambios);
     this.RecambiosObject = recambios.map((x:any )=> 
     new ClaseRecambios(
       x._idPieza,
       x._nombre, 
       x._precio,
       x._tipo,
       x._fabricante,
       x._cantidadTotal,
       x._idEscuderia)
      );

      this.RecambiosObject.forEach(element => {
        element.precioFinal();
      }
      );
      this.recambio = this.RecambiosObject;
    });
  }

  removeRecambio(id: any) {
    this.formulaOneService.eliminarRecambio(id).subscribe(data => {
      this.toastr.success('Recambio Eliminado', 'Eliminado');
      this.getRecambiosApi();
    });
  }

}
