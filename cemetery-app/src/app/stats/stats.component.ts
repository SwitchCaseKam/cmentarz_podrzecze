

import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, skip, switchMap, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DeathsByYear, SexesStats } from '../models/stats.model';
import { StatsService } from '../services/stats.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  public sexesStats: SexesStats;
  public deathsByYear: DeathsByYear;
  public dbDate: string;
  private statsSubscription: Subscription;

  constructor(private statsService: StatsService, private dataService: DataService) { }

  public ngOnInit(): void {
    this.statsSubscription = this.statsService.getDeathsByYearStatsSubject().pipe(
      filter(deathsData => deathsData?.size > 0),
      tap(() => {
        this.sexesStats = this.statsService.getSexesStats();
        this.deathsByYear = this.statsService.getDeathsByYearStats();
      }),
      switchMap(() => this.dataService.getDatabaseDateSubject())
    ).pipe(
      filter((dbDate: string) => dbDate !== '')
    ).subscribe((dbDate: string) => this.dbDate = dbDate);
  }

  public ngOnDestroy(): void {
    this.statsSubscription?.unsubscribe();
  }
}
