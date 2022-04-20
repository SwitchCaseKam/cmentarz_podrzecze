import { DataService } from 'src/app/services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { filter, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public allPeople: Person[];
  public dbDate: string;
  private dataSubscription: Subscription;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.fetchListDataToDisplay();
  }

  public ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

  private fetchListDataToDisplay(): void {
    this.dataSubscription = this.dataService.getAllPeopleSubject().pipe(
      filter((people: Person[]) => people?.length > 0),
      tap((people: Person[]) => {
        this.allPeople = people.sort((a, b) => a.surname.localeCompare(b.surname, 'pl', { ignorePunctuation: true }));
      }),
      switchMap(() => this.dataService.getDatabaseDateSubject())
    ).pipe(
      filter((dbDate: string) => dbDate !== '')
    ).subscribe((dbDate: string) => this.dbDate = dbDate);
  }
}
