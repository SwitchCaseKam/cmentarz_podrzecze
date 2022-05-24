import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { Person } from '../models/person.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-map-locator',
  templateUrl: './map-locator.component.html',
  styleUrls: ['./map-locator.component.css']
})
export class MapLocatorComponent implements OnInit {

  @ViewChild('map-container') private mapContainer: ElementRef;
  public allPeople: Person[];
  public dbDate: string;
  private dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.fetchListDataToDisplay();
  }

  public ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

  private fetchListDataToDisplay(): void {
    this.dataSubscription = this.dataService.getAllPeopleSubject().pipe(
      filter((allPeople: Person[]) => allPeople?.length > 0),
      tap((allPeople: Person[]) => this.allPeople = allPeople),
      switchMap(() => this.dataService.getDatabaseDateSubject())
    ).pipe(
      filter((dbDate: string) => dbDate !== '')
    ).subscribe((dbDate: string) => this.dbDate = dbDate);
  }
}
