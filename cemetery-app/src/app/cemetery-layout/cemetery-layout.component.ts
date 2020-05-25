import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../person.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cemetery-layout',
  templateUrl: './cemetery-layout.component.html',
  styleUrls: ['./cemetery-layout.component.css']
})
export class CemeteryLayoutComponent implements OnInit, OnDestroy {

  public peopleCount = 0;
  public dbDate: string;
  private people: Person[];
  private peopleDataSubscription: Subscription;

  constructor(private dataService: DataService) { }

  public ngOnInit() {
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
