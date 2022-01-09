import { DataService } from 'src/app/services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { TombMarkerService } from '../services/tomb-marker.service';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit, OnDestroy {

  public anniversaryPeople: Person[] = [];
  public numberOfAnniversaryPeople: number = -1;
  private anniversarySubscription: Subscription;
  public candleLighted = false;

  constructor(private dataService: DataService, private tombMarkerService: TombMarkerService) { }

  public ngOnInit(): void {
    this.anniversarySubscription = this.dataService.getAnniversaryPeople().subscribe((anniversaryPeople: Person[]) => {
      if (anniversaryPeople?.length >= 0) {
        this.anniversaryPeople = anniversaryPeople;
        this.numberOfAnniversaryPeople = this.anniversaryPeople?.length;
      }
    })
  }

  public ngOnDestroy(): void {
    this.candleLighted = false;
    this.anniversarySubscription?.unsubscribe()
  }

  public onRowClick(tombId: number): void {
    this.tombMarkerService.redirectToMapAndMarkTomb(tombId, 500);
  }

  public lightCandle(): void {
    this.candleLighted = true;
  }


}
