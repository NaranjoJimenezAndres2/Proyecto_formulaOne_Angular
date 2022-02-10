import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import { ReparacionSchema } from 'src/app/models/interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.css']
})
export class ReparacionesComponent implements OnInit {
  reparacionesForm: FormGroup;
  
  
  constructor(private fb: FormBuilder,
    private formulaOneService: FormulaOneService,
    private toastr: ToastrService,)
    { 

      this.reparacionesForm = this.fb.group({
        _idReparacion: ['', Validators.required],
        _idIngeniero: ['', Validators.required],
        _idPieza: ['', Validators.required],
        _idCoche: ['', Validators.required],
        _cantidad: ['', Validators.required],
        _fecha: ['', Validators.required],
        _estado: ['', Validators.required]
  
    })
  }

  addReparaciones() {
    const reparaciones: ReparacionSchema = {
      _idReparacion: this.reparacionesForm.get('_idReparacion')?.value,
      _idIngeniero: this.reparacionesForm.get('_idIngeniero')?.value,
      _idPieza: this.reparacionesForm.get('_idPieza')?.value,
      _idCoche: this.reparacionesForm.get('_idCoche')?.value,
      _cantidad: this.reparacionesForm.get('_cantidad')?.value,
      _fecha: this.reparacionesForm.get('_fecha')?.value,
      _estado: this.reparacionesForm.get('_estado')?.value
    }

    console.log(reparaciones);
    this.formulaOneService.addReparacion(reparaciones).subscribe((x:any) => {
      console.log(x);
      console.log('documento enviado');
      if (x == "borrado"){
        this.toastr.error('Reparacion invalida', 'No hay suficientes piezas')
      }
      else if (x == "actualizado"){
        this.toastr.success('Reparacion enviada', 'Datos registrados')
      }
      else {
        this.toastr.info('Error desconocido', 'Fallo en el envio')
      }

    })

  }

  ngOnInit(): void {
  }

}
