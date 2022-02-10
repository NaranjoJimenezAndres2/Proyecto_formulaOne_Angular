import { Component, OnInit } from '@angular/core';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import { ClaseEquipo } from 'src/app/models/equipos';
import { ClaseClasificacion } from 'src/app/models/clasificacion';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {
  //clasificacionAPI = null;
  clasificacionObject: ClaseClasificacion[] = [];
  clasificacion: any;

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart: { backgroundColor: {
      linearGradient: [0, 0, 500, 500],
      stops: [
          [0, 'rgb(192, 193, 192)'],
          [1, 'rgb(217, 217, 217)']
      ]
  },
      type: 'bar',
    },
    title: {
      text: 'Tabla Clasificacin Mundial F1 2021',
    },
    subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>',
    },
    yAxis: {
      tickInterval: 5,
      categories: [],
    },
    xAxis: {
      min: 0,
      title: {
        text: 'pilotos',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: ' millions',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'column',
        name: 'Puntos',
        data: [],
        color: 'red',
      },
    ],
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#303030',
      },
    },
  };

  constructor(private formulaOneService: FormulaOneService) {}

  getClasificacion() {
    this.formulaOneService.getPuntosApi().subscribe((clasificacion: any) => {


      this.clasificacionObject = clasificacion.map((x: any) => 
        new ClaseClasificacion(
          x._idPiloto,
          x._nombre,
          x._apellidos,
          x._fechaContratacion,
          x._puntosTotales
        )
      );
      console.log(this.clasificacionObject)

      clasificacion.sort((a: any, b: any) => 
          a._puntosTotales > b._puntosTotales ? -1 : 1
      )

      this.clasificacionObject.sort((a: ClaseClasificacion, b: ClaseClasificacion) => 
      a.points > b.points ? -1 : 1
  )
      const dataSeries = this.clasificacionObject.map(
        (x: ClaseClasificacion) => x.points
      );
      const dataCategories = this.clasificacionObject.map(
        (x: ClaseClasificacion) => x.id
      );
      this.chartOptions.series[0]['data'] = dataSeries;
      this.chartOptions.xAxis['categories'] = dataCategories;
      Highcharts.chart('miGrafico01', this.chartOptions);
    })
  }
  ngOnInit() {
    this.getClasificacion();
  }
}


