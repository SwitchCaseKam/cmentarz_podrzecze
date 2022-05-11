import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarDetailsComponent } from './charts/bar-chart/bar-details/bar-details.component';
import { ChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { GeneralInfoComponent } from './general-info/general-info.component';


@NgModule({
  declarations: [
    StatsComponent,
    GeneralInfoComponent,
    BarChartComponent,
    PieChartComponent,
    BarDetailsComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    StatsRoutingModule,
    MatDialogModule,
    CommonComponentsModule
  ]
})
export class StatsModule { }
