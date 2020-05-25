import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})

export class PieChartComponent implements OnInit {

  @Input()
  public allMenCount: number;
  @Input()
  public allWomenCount: number;

  public pieChartLabels = ['Kobiety', 'Mężczyzni'];
  public pieChartData: number[];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
    console.log(`[PC.C] onInit with inputs: ${this.allMenCount}, ${this.allWomenCount}`);
    this.pieChartData = [this.allWomenCount, this.allMenCount];
  }
}
