import { Component, OnInit } from '@angular/core';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import  { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReparacionSchema } from '../../models/interfaces';
import { ToastrService } from 'ngx-toastr';
import { ClaseReparaciones } from '../../models/reparacion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mod-reparacion',
  templateUrl: './mod-reparacion.component.html',
  styleUrls: ['./mod-reparacion.component.css']
})
export class ModReparacionComponent implements OnInit {
  reparacionesForm: FormGroup;
  rep:any;
  id: string | null;
  reparacionesObject: ReparacionSchema[]=[];
  reparacionObject: ClaseReparaciones [] = [];


  estados = [
    {estado:'En proceso'},
    {estado: 'Finalizado'},
    {estado:'Cancelado'} ,
    {estado:'En espera'}];


    topicHasError= true;

    validateEstado(value:any){
      if (value === 'default') {
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }
    }

  constructor(private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private formulaOneService: FormulaOneService,
    private router: Router,
    private toastr: ToastrService,
    ) {

      this.reparacionesForm = this.fb.group({
        _idReparacion: ['', Validators.required],
        _idIngeniero: ['', Validators.required],
        _idPieza: ['', Validators.required],
        _idCoche: ['', Validators.required],
        _cantidad: ['', Validators.required],
        _fecha: ['', Validators.required],
        _estado: [null , Validators.required]
  
    })
    this.id = this.aRouter.snapshot.paramMap.get('idReparacion')
     }

     editarReparacion() {
      if (this.id !== null) {
        const reparacion : ReparacionSchema = {
          _idReparacion: this.reparacionesForm.get('_idReparacion')?.value,
          _idIngeniero: this.reparacionesForm.get('_idIngeniero')?.value,
          _idPieza: this.reparacionesForm.get('_idPieza')?.value,
          _idCoche: this.reparacionesForm.get('_idCoche')?.value,
          _cantidad: this.reparacionesForm.get('_cantidad')?.value,
          _fecha: this.reparacionesForm.get('_fecha')?.value,
          _estado: this.reparacionesForm.get('_estado')?.value
        }

       this.formulaOneService.editarReparacion(this.id, reparacion).subscribe(reparacion => {
         console.log(reparacion)
         console.log(this.id)
         this.toastr.info('Ticket editado', 'Informacion actualizada')
         this.router.navigate(['/dashboard/listarReparaciones'])})
       }
      }



      editEquipo() {
        if (this.id !== null) {
            this.formulaOneService.getReparacion(this.id).subscribe((reparacion :any )=> {
           // console.log (reparacion);
            console.log (this.id);
            this.reparacionObject= reparacion.map((x:any )=>
            new ClaseReparaciones(
              x._idReparacion,
              x._idIngeniero,
              x._idPieza,
              x._idCoche,
              x._cantidad,
              x._fecha,
              x._estado
            ));
            console.log(this.reparacionObject)
            this.rep= this.reparacionObject;
            
            this.reparacionesForm.patchValue({
              _idReparacion: this.id,
              _idIngeniero: this.rep[0]._idIngeniero,
              _idPieza: this.rep[0]._idPieza,
              _idCoche: this.rep[0]._idCoche,
              _cantidad: this.rep[0]._cantidad,
              _fecha: this.rep[0]._fecha
            
            


            });
          })
        }
    
      }

  ngOnInit(): void {
    this.editEquipo()
  }

}
