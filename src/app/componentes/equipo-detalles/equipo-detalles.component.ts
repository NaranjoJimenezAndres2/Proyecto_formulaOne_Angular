import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { ClaseEquipoDetalle } from 'src/app/models/equipoDetalle';
import { ClaseEquipo } from 'src/app/models/equipos';
import { PiezaSchema, SalarioSchema } from 'src/app/models/interfaces';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import * as Highcharts from 'highcharts';
import { style } from '@angular/animations';

@Component({
  selector: 'app-equipo-detalles',
  templateUrl: './equipo-detalles.component.html',
  styleUrls: ['./equipo-detalles.component.css']
})
export class EquipoDetallesComponent implements OnInit {
  piezaShema: PiezaSchema[] = []
  salarioSchema: SalarioSchema[] = []
  id: string | null;
  piezasCoste : number = 0;
  salarioCoste : number = 0;
  EquipoObject: ClaseEquipo[] = [];
  equipo: any;
  equipoDetalleObject: ClaseEquipoDetalle[] = [];
  equipoDetalle: any;
  equipoMostrar: any [] = [];

  /*****Tabla de Highchart**** */

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      },
      backgroundColor: null
  },
  title: {
      text: 'Presupuesto disponible',
        style : {
          color : '#fff',
          fontWeight : 'bold'}
  },
  subtitle: {
      text: 'Temporada 2021'
  },
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45
      }
  },
  series: [{
      name: 'Delivered amount',
      data: [ ]
  }]
}


  constructor(private formulaOneService: FormulaOneService,
    private aRouter: ActivatedRoute,
    private router: Router,)
    
    { 
    this.id = this.aRouter.snapshot.paramMap.get('idEscuderia')
  }

  ngOnInit(): void {
    this.getDetalleEquipo();
  }


  getDetalleEquipo(){
    if (this.id !== null) {
    this.formulaOneService.getPrecioReparacion(this.id).subscribe((data: any) => {
      console.log(data);
      console.log(this.id);
      this.piezaShema = data.map((x: any) => {
        return {
          _id: {
            _idPieza: x._idPieza,
            _idEscuderia: x._idEscuderia,
          },
          precio: x.precio,
        }
      }
      )
      this.piezasCoste = this.piezaShema[0].precio;
      console.log("estamos en la parte 1 " + this.piezasCoste);
      
      
      this.equipoDetalleObject = data.map((x: any) => {
        return new ClaseEquipoDetalle(
          x._idEscuderia,
          x._nombre,
          x._piezasCoste,
          x._salarioCoste,
          x._presupuesto
        )})
        this.equipoDetalle = this.equipoDetalleObject[0];

        console.log(this.equipoDetalleObject[0] )

        this.equipoDetalle._piezasCoste = this.piezasCoste;

        console.log( this.equipoDetalle._piezasCoste + "se ha cargado el coste de piezas");

      this.getDetalleEquipo2()
    })
  }
  }

  getDetalleEquipo2(){
    if (this.id !== null) {
      this.formulaOneService.getSalarios(this.id).subscribe((data: any) => { //los calculos vienen realizados en la API
        console.log("funcion 2");
        this.salarioSchema = data.map((x: any) => {
          return {
            _idPersonal: x._idPersonal,
            _nombre: x._nombre,
            _apellidos: x._apellidos,
            _fechaContratacion: x._fechaContratacion,
            _salario: x._salario,
          }
        }
        )

        this.salarioSchema.forEach(element => {
          this.salarioCoste += element._salario;
        });

        console.log(this.salarioCoste + "carga del salario");


        this.equipoDetalle._salarioCoste = this.salarioCoste;

        console.log("se cargo en la fase 2 " + this.equipoDetalle._salarioCoste);

        this.getDetalleEquipo3()
      })
    }
  }

  getDetalleEquipo3(){
    if (this.id !== null) {
      this.formulaOneService.getEquipoById(this.id).subscribe((equipo: any) => {
        this.EquipoObject= equipo.map((x: any) => {
          return new ClaseEquipo(
            x._idEscuderia,
            x._nombre, 
            x._pais,
            x._motorDistribuidor,
            x._presupuesto,
            x._escudo)
        }
        )
        this.equipo = this.EquipoObject;

        console.log("llegamos funcion 3")
        console.log(this.equipo);

        console.log ("-----")


        this.equipoDetalle._idEscuderia = this.equipo[0]._idEscuderia;
        this.equipoDetalle._nombre = this.equipo[0]._nombre;
        this.equipoDetalle._presupuesto = this.equipo[0]._presupuesto;


        console.log(this.equipoDetalle._nombre + " se ha cargado el nombre");

        this.equipoDetalleObject.forEach(element => {
          element.presupuestoFinal();
        });

        this.equipoMostrar.push(this.equipoDetalleObject[0]);

        console.log(this.equipoMostrar);

        /******** HighCharts***** */
        
        const dataSeriesValor1 = this.equipoDetalleObject.map(
          (x: ClaseEquipoDetalle) => x.piezasCoste
        );
        const dataSeriesNombre1 = "Piezas Coste"

        console.log (dataSeriesValor1);
        let arrayUno = [];
        arrayUno.push(dataSeriesNombre1);
        arrayUno.push(dataSeriesValor1[0]);
        //console.log(arrayUno);
        

        const dataSeriesValor2 = this.equipoDetalleObject.map(
          (x: ClaseEquipoDetalle) => x.salarioCoste
        );
        const dataSeriesNombre2 = "Salario Coste"

        console.log (dataSeriesValor2);
        let arrayDos = [];
        arrayDos.push(dataSeriesNombre2);
        arrayDos.push(dataSeriesValor2[0]);
        //console.log(arrayDos);



        const dataSeriesValor3 = this.equipoDetalleObject.map(
          (x: ClaseEquipoDetalle) => x.presupuesto
        );
        const dataSeriesNombre3 = "Presupuesto Disponible"

        console.log (dataSeriesValor3);
        let arrayTres = [];
        arrayTres.push(dataSeriesNombre3);
        arrayTres.push(dataSeriesValor3[0]);
        //console.log(arrayTres);

        let arrayFinal = [];
        arrayFinal.push(arrayUno);
        arrayFinal.push(arrayDos);
        arrayFinal.push(arrayTres);



        this.chartOptions.series[0]['data'] = arrayFinal;


        Highcharts.chart('miGrafico01', this.chartOptions);

      })

    }


  







  }


















}







  