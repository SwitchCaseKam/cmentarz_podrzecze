import { SexesStats, DeathsByYear } from './../../models/stats.model';
import { StatsService } from './../../services/stats.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
    this.statsSubscription = this.statsService.getDeathsByYearStatsSubject().subscribe(deathsData => {
      if (deathsData?.size > 0) {
        this.sexesStats = this.statsService.getSexesStats();
        this.deathsByYear = this.statsService.getDeathsByYearStats();
      }
    });
  }

  public ngOnDestroy(): void {
    this.statsSubscription?.unsubscribe();
  }
}
