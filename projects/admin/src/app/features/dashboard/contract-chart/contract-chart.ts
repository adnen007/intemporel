import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  NgApexchartsModule,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';

import { series } from './data';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  colors: string[];
  fill: ApexFill;
};

@Component({
  selector: 'app-contract-chart',
  imports: [NgApexchartsModule],
  templateUrl: './contract-chart.html',
  styleUrls: ['./contract-chart.css'],
})
export class ContractChart {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'STOCK ABC',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 320,
        zoom: {
          enabled: false,
        },
      },
      // Line/Stroke color
      colors: ['#daf2c2'], // Main line color - you can use any hex color

      // Area fill gradient (optional)
      fill: {
        colors: ['#f6fcf1'], // Your light green fill
        opacity: 1,
        type: 'solid',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3, // Line thickness
        colors: ['#daf2c2'], // Can also define stroke color here
      },

      title: {
        text: 'Statistique contract',
        align: 'center', // Options: 'left', 'center', 'right'
        margin: 20, // Space below title
        offsetY: 0, // Vertical position adjustment
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#727272', // Title text color
        },
      },

      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }
}
