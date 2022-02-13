import { Component, OnInit } from '@angular/core';
import { ClaseComparativaPiloto } from 'src/app/models/comparativaPiloto';
import { FormulaOneService } from 'src/app/services/formulaOne.service';
import * as Highcharts from 'highcharts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comparativa',
  templateUrl: './comparativa.component.html',
  styleUrls: ['./comparativa.component.css']
})
export class ComparativaComponent implements OnInit {
  id: string | null;
  comparativaObject: ClaseComparativaPiloto[] = [];
  array: any = [];
  json1: any = { "name": "Piloto", "y": 0 };
  json2: any = { "name": "Piloto", "y": 0 };

  jsonX: any = { "name": "Piloto", "data": []};
  jsonY: any = { "name": "Piloto", "data": [] };
  x:any


  Highcharts: typeof Highcharts = Highcharts;

  chartOptionsPie: any = {
    chart: {
      backgroundColor: null,
      borderWidth: null,
      shadow: false,
      type: 'pie'
    },
    title: {
      text: ""
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    legend: {
      itemStyle: {
        color: 'white',
        fontWeight: 'bold'
      }
    },
    series: [{
      name: 'Puntos',
      colorByPoint: true,
      data: []
    }]
  }

  /*****************2ª grafica ****************** */


  chartOptionsBar: any = {
    chart: {
      type: 'bar',
      backgroundColor: null,
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [],
      title: {
        text: null
      },labels: {
        style: {
          color: 'white'}
        }
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
  
    credits: {
      enabled: false
    },
    series: []
  }





  constructor(private formulaOneService: FormulaOneService,
    private aRouter: ActivatedRoute,
    private router: Router,) {
    this.id = this.aRouter.snapshot.paramMap.get('idEscuderia')
  }

  ngOnInit(): void {
    this.getComparativa()
  }

  getComparativa() {
    if (this.id !== null) {
      this.formulaOneService.getComparativa(this.id).subscribe((pilotos: any) => {
        console.log(pilotos)
        this.comparativaObject = pilotos.map((x: any) =>
          new ClaseComparativaPiloto(
            x._idPiloto,
            x._nombre,
            x._apellidos,
            x._fechaContratacion,
            x._puntosTotales,
            x._abandonos,
            x._adelantamientos,
            x._foto)
        )

        console.log(this.comparativaObject)
        this.comparativaObject.forEach(element => {
          element.setFoto();
        });

        //console.log(this.comparativaObject)

        //extraer un campo del objeto y meterlo en un array
        this.comparativaObject.forEach(element => {
          this.array.push(element.foto);
        });

        //console.log(this.array);
        const dataSeriesValor1 = this.comparativaObject.map(
          (x: ClaseComparativaPiloto) => x.points
        );

        const dataSeriesNombre1 = this.comparativaObject.map(
          (x: ClaseComparativaPiloto) => x.id
        );

        console.log(dataSeriesNombre1 + " " + dataSeriesValor1);

        //introducir los valores en el json
        this.json1.name = dataSeriesNombre1[0];
        this.json1.y = dataSeriesValor1[0];

        this.json2.name = dataSeriesNombre1[1];
        this.json2.y = dataSeriesValor1[1];

        console.log(this.json1)
        console.log(this.json2)

        let arrayFinal = [];
        arrayFinal.push(this.json1);
        arrayFinal.push(this.json2);

        console.log(arrayFinal)



        this.chartOptionsPie.series[0]['data'] = arrayFinal;

        Highcharts.chart('miGrafico01', this.chartOptionsPie);

        //*************************2ª grafica************************* */

        const dataValor1 = this.comparativaObject.map(
          (x: ClaseComparativaPiloto) => x.abandonos
        );

        const dataValor1Etiqueta = 'Abandonos'

        const dataValor2 = this.comparativaObject.map(
          (x: ClaseComparativaPiloto) => x.adelantamientos
        );

        const dataValor2Etiqueta = 'Adelantamientos'

        const dataNombre1 = this.comparativaObject.map(
          (x: ClaseComparativaPiloto) => x.id
        );

        console.log(dataNombre1 + " " + dataValor1+" "+dataValor2);

        //introducir los valores en el json
        this.jsonX.name = dataNombre1[0];
        this.jsonX.data.push(dataValor1[0]);
        this.jsonX.data.push(dataValor2[0]);

        this.jsonY.name = dataNombre1[1];
        this.jsonY.data.push(dataValor1[1]);
        this.jsonY.data.push(dataValor2[1]);

        
        

        this.chartOptionsBar.series.push(this.jsonX, this.jsonY);

        this.chartOptionsBar.xAxis.categories.push(dataValor1Etiqueta, dataValor2Etiqueta);
    




        Highcharts.chart('miGrafico02', this.chartOptionsBar);





      })
    };
  }





}
