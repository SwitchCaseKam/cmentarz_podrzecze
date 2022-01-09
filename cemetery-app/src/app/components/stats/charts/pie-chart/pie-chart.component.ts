import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input()
  public numberOfAllMen: number;
  @Input()
  public numberOfAllWomen: number;

  public pieChartLabels = ['Kobiety', 'Mężczyźni'];
  public pieChartData: number[];
  public pieChartType = 'pie';

  constructor() { }

  public ngOnInit(): void {
    this.pieChartData = [this.numberOfAllWomen, this.numberOfAllMen];
  }

}
