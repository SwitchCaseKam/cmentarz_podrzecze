import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { DataService } from 'src/app/services/data.service';

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
    this.allPeopleSubscription = this.dataService.getAllPeopleSubject().subscribe((allPeople: Person[]) => {
      if (allPeople?.length > 0) { this.allPeople = allPeople;}
    });
    this.dbDateSubscription = this.dataService.getDatabaseDateSubject().subscribe((dbDate: string) => {
      if (dbDate !== '') { this.dbDate = dbDate;}
    });
  }

  public ngOnDestroy(): void {
    this.allPeopleSubscription?.unsubscribe();
    this.dbDateSubscription?.unsubscribe();
  }

}
