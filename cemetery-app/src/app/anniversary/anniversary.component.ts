import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { Person } from '../person.model';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit, OnDestroy {

  public allPeople: Person[];
  public todayDateAndMonth: string;
  public anniversaryPeople: any = [];
  public anniversaryPeopleCount = -1;
  private peopleDataSubscription: Subscription;
  private candleLighted = false;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.todayDateAndMonth = this.getCurrentDate();
    this.peopleDataSubscription = this.dataService.getAllPeople().subscribe(
      (allPeople: Person[]) => {
        this.allPeople = allPeople;
        this.checkAnniversary();
      }
    );

  }

  public ngOnDestroy(): void {
    this.candleLighted = false;
    this.peopleDataSubscription.unsubscribe();
  }

  private getCurrentDate(): string {
    let todayDate: string;
    const today = new Date();
    const extra = today.getMonth().toString().length === 1 ? '0' : '';
    todayDate = today.getDate() + '.' + extra + (today.getMonth() + 1);
    console.log('Today date: ' + todayDate);
    return todayDate;
  }

  private checkAnniversary(): void {
    this.allPeople.forEach((person: Person) => {
      const today = new Date();
      const date = person.deathDate.split('.');
      if (date.length === 3) {
        if (date[0] + '.' + date[1] === this.todayDateAndMonth) {
          const anniversaryCounter: number = today.getFullYear() - parseInt(date[2]);
          person['anniversaryCounter'] = anniversaryCounter;
          this.anniversaryPeople.push(person);
        }
      }
      this.anniversaryPeopleCount = this.anniversaryPeople.length;
    });
  }

  public lightCandle(): void {
    this.candleLighted = true;
  }


}
