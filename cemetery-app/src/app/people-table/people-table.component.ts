import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../person.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit, OnDestroy {

  public people: Person[];
  public peopleCount = 0;
  public dbDate: string;
  private peopleDataSubscription: Subscription;

  constructor(private dataService: DataService) { }

  public ngOnInit() {
    console.log('onInit people table')
    this.getPeopleInfo();
    this.dbDate = this.getDbDateInfo();
  }

  public ngOnDestroy() {
    this.peopleDataSubscription.unsubscribe();
  }

  private getPeopleInfo(): void {
    this.peopleDataSubscription = this.dataService.getAllPeople().subscribe(
      (allPeople: Person[]) => {
        this.people = allPeople;
        this.peopleCount = allPeople.length;
      }
    );
  }

  private getDbDateInfo(): string {
    return this.dataService.getDbDate();
  }
}
