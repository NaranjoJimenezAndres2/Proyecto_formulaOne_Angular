import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/personal/empleado';
import { Ingeniero } from 'src/app/models/personal/ingeniero';
import { Mecanico } from 'src/app/models/personal/mecanico';
import { xPersonal } from 'src/app/models/personal/personalSchema';
import { Piloto } from 'src/app/models/personal/piloto';
import { FormulaOneService } from 'src/app/services/formulaOne.service';


@Component({
  selector: 'app-mostrar-personal',
  templateUrl: './mostrar-personal.component.html',
  styleUrls: ['./mostrar-personal.component.css'],


})
export class MostrarPersonalComponent implements OnInit {
  id: string | null;
  empleadoObject: Empleado[] = [];

  mecanicoObject: Mecanico[] = [];
  pilotoObject: Piloto[] = [];
  ingenieroObject: Ingeniero[] = [];

  tmpEmpleado : Empleado= new Empleado("", "", "", new Date(), 0, "");
  
  array:any=[]  
  x :number=0;

  constructor(    private aRouter: ActivatedRoute,
    private formulaOneService: FormulaOneService,
    private router: Router,) { 
      
      this.id = this.aRouter.snapshot.paramMap.get('idEscuderia')
  }

  ngOnInit(): void {
    this.getPersonalById();
  }


  getPersonalById(){
    if (this.id !== null) {
    this.formulaOneService.getPersonalById(this.id).subscribe(
      (data : any) => {
        console.log(data);
        data.forEach((element :any )=> {
          if (element._idIngeniero) {
            this.tmpEmpleado= new Ingeniero(element._idIngeniero, element._especialidad, element._idPersonal, element._nombre, element._apellidos, element._fechaContratacion,element._salario, element._idEscuderia, element._horasNocturnas )
          }
          else if (element._idMecanico) {
            this.tmpEmpleado = new Mecanico(element._idMecanico,element._posicion, element._paleta, element._idPersonal, element._nombre, element._apellidos, element._fechaContratacion,element._salario, element._idEscuderia )
          }
          else {
            this.tmpEmpleado = new Piloto(element._idPiloto, element._nacionalidad, element._vueltasRapidas, element._adelantamientos, element._abandonos, element._puntosTotales, element._idPersonal, element._nombre, element._apellidos, element._fechaContratacion, element._salario,element._idEscuderia)
          }
          this.array.push(this.tmpEmpleado);
        });

        
        

        console.log(this.array);

      //aplicar un metodo de la clase Empleado para obtener el salario total
        /*this.array.forEach((element:Empleado)=>{
          console.log(element);
          element.salarioTotal();
          console.log(element.salarioTotal());
        })*/

        this.array.map((element:Empleado)=>{
          console.log(element);
           this.x = element.salarioTotal();
           element.salario=this.x;
          console.log(this.x );
        })

        this.pilotoObject= this.array.filter((element:Empleado) => element instanceof Piloto);
        console.log(this.pilotoObject);
        this.mecanicoObject= this.array.filter((element:Empleado) => element instanceof Mecanico);
        console.log(this.mecanicoObject);
        this.ingenieroObject= this.array.filter((element:Empleado) => element instanceof Ingeniero);

      })
    }
   
  }








}
