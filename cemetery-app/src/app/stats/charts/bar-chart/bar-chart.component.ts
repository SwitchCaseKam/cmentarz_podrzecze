import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input()
  public chartData: number[];
  @Input()
  public barChartLabels: string[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  constructor() { }

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(33, 18, 78, .5)',
      borderColor: 'rgba(0, 0, 0, .7)',
      borderWidth: 2,
    }
  ];
  ngOnInit() {
    console.log(`[BC.C] onInit wit inputs: ${this.chartData}, ${this.barChartLabels}`);
    this.barChartData = [
      {data: this.chartData, label: 'Liczba zmarłych w danym roku'}
    ];
  }
}
