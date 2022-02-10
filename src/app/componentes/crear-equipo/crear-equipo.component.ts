import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaseEquipo } from 'src/app/models/equipos';
import { EquipoSchema } from 'src/app/models/interfaces';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {
  equiposForm: FormGroup;
  equipoObject: EquipoSchema[] = [];
  id: string | null
  titulo = "Crear Equipo";
  boton = "Crear";

  constructor(private fb: FormBuilder,
    private formulaOneService: FormulaOneService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute


  ) {
    this.equiposForm = this.fb.group({
      _idEscuderia: ['', Validators.required],
      _nombre: ['', Validators.required],
      _pais: ['', Validators.required],
      _motorDistribuidor: ['', Validators.required],
      _presupuesto: ['', Validators.required]

    })
    this.id = this.aRouter.snapshot.paramMap.get('idEscuderia');
  };

  ngOnInit(): void {
    this.editEquipo();
  
  }
  //enviar un documento a la rest api con una funcion
  addEquipo() {
    const equipo: EquipoSchema = {
      _idEscuderia: this.equiposForm.get('_idEscuderia')?.value,
      _nombre: this.equiposForm.get('_nombre')?.value,
      _pais: this.equiposForm.get('_pais')?.value,
      _motorDistribuidor: this.equiposForm.get('_motorDistribuidor')?.value,
      _presupuesto: this.equiposForm.get('_presupuesto')?.value
    }

    if (this.id !== null) {

      this.formulaOneService.editarEquipo(this.id, equipo).subscribe(() => {
        this.toastr.info('Equipo editado', 'Equipo editado');
        this.router.navigate(['/dashboard/equipos']);
      })


    }
    else {
      console.log(equipo);

      const equipoTmp: EquipoSchema = {
        _idEscuderia: equipo._idEscuderia.trim(),
        _nombre: equipo._nombre.trim(),
        _pais: equipo._pais.trim(),
        _motorDistribuidor: equipo._motorDistribuidor.trim(),
        _presupuesto: equipo._presupuesto
      }

      console.log(equipoTmp);
      let parse = JSON.stringify(equipoTmp);
      console.log(parse);
      let equipoLimpio = JSON.parse(parse);
      console.log("hola")
      this.formulaOneService.crearEquipo(equipoLimpio).subscribe(() => {
        console.log("adios")
        this.equiposForm.reset();
        this.equiposForm.markAsUntouched();
        this.toastr.success('Equipo creado', 'Equipo creado');

        this.router.navigate(['/dashboard/equipos']);
      })

    }



  }



  editEquipo() {
    if (this.id !== null) {
      this.titulo = "Editar Equipo";
      this.boton = "Editar";
      this.formulaOneService.getEquipo(this.id).subscribe(equipo => {
        console.log (equipo);
        console.log (this.id);
        this.equiposForm.patchValue({
          _idEscuderia: this.id,
          _nombre: equipo._nombre,
          _pais: equipo._pais,
          _motorDistribuidor: equipo._motorDistribuidor,
          _presupuesto: equipo._presupuesto
        });
      })
    }

  }
}


