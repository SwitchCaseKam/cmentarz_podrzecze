import { DataService } from 'src/app/services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public allPeople: Person[];
  public dbDate: string;
  private allPeopleSubscription: Subscription;
  private dbDateSubscription: Subscription;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.allPeopleSubscription = this.dataService.getAllPeopleSubject().subscribe((people: Person[]) => {
      if (people?.length > 0) {
        this.allPeople = people.sort((a, b) => a.surname.localeCompare(b.surname, 'pl', { ignorePunctuation: true }));
      }
    });
    this.dbDateSubscription = this.dataService.getDatabaseDateSubject().subscribe((dbDate: string) => {
      if (dbDate !== '') { this.dbDate = dbDate}
    });
  }

  public ngOnDestroy(): void {
    this.allPeopleSubscription?.unsubscribe();
    this.dbDateSubscription?.unsubscribe();
  }

}
