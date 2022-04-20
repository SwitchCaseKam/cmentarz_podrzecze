

import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, skip } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DeathsByYear, SexesStats } from '../models/stats.model';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  public sexesStats: SexesStats;
  public deathsByYear: DeathsByYear;
  private statsSubscription: Subscription;

  constructor(private statsService: StatsService) { }

  public ngOnInit(): void {
    this.statsSubscription = this.statsService.getDeathsByYearStatsSubject().pipe(
      filter(deathsData => deathsData?.size > 0)
    ).subscribe(() => {
        this.sexesStats = this.statsService.getSexesStats();
        this.deathsByYear = this.statsService.getDeathsByYearStats();
    });
  }

  public ngOnDestroy(): void {
    this.statsSubscription?.unsubscribe();
  }
}
