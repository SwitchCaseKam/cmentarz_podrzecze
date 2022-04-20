
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatsService } from 'src/app/services/stats.service';
import { BarDetailsComponent } from './bar-details/bar-details.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnDestroy {

  @Input()
  public chartData: number[];
  @Input()
  public barChartLabels: string[];

  public barChartData = [];
  public barChartType = 'bar';
  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(22, 66, 229)',
      borderWidth: 1
    }
  ];

  constructor(
    public dialog: MatDialog,
    private statsService: StatsService
  ) { }

  public ngOnInit(): void {
    this.barChartData = [{data: this.chartData, label: 'Liczba zmarłych w danym roku'}];
  }

  public ngOnDestroy(): void {
    this.dialog.closeAll()
  }

  public onClick(event) {
    const year = event.active[0]?._model.label;
    if (year) {
      const dialogRef = this.dialog.open(BarDetailsComponent);
      dialogRef.componentInstance.people = this.statsService.getPeopleByYear(year);
      dialogRef.componentInstance.year = year;
      dialogRef.afterClosed().subscribe();
    }
  }

}
