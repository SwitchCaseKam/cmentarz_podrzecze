import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { DataService } from 'src/app/services/data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {

  public allPeople: Person[];
  public dbDate: string;
  private allPeopleSubscription: Subscription;
  private dbDateSubscription: Subscription;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.allPeopleSubscription = this.dataService.getAllPeopleSubject()
      .pipe(filter((allPeople: Person[]) => allPeople?.length > 0))
        .subscribe((allPeople: Person[]) => this.allPeople = allPeople);
    
    this.dbDateSubscription = this.dataService.getDatabaseDateSubject()
      .pipe(filter((dbDate: string) => dbDate !== ''))
        .subscribe((dbDate: string) => this.dbDate = dbDate);
  }

  public ngOnDestroy(): void {
    this.allPeopleSubscription?.unsubscribe();
    this.dbDateSubscription?.unsubscribe();
  }

}
