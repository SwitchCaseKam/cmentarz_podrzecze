import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../person.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  public allPeopleCount = 0;
  public allMenCount: number;
  public allWomenCount: number;
  public dbDate: string;
  public deathYears: string[] = [];
  public peopleByYearArray: number[] = [];

  private peopleDataSubscription: Subscription;

  constructor(private dataService: DataService) { }

  public ngOnInit() {
    this.getPeopleInfo();
    this.dbDate = this.getDbDate();
  }

  public ngOnDestroy() {
    this.peopleDataSubscription.unsubscribe();
  }

  private getPeopleInfo() {
    this.peopleDataSubscription = this.dataService.getAllPeople().subscribe((allPeople: Person[]) => {
      this.allPeopleCount = allPeople.length;
      this.setSexesData(allPeople);
      this.setDeathsByYearData(allPeople);
    }, error => {
      console.log('[ST.C] unable to subscribe to allPeople');
    });
  }

  private setSexesData(allPeople: Person[]) {
    this.allMenCount = allPeople.filter((item) => item.sex === 'M').length;
    this.allWomenCount = allPeople.filter((item) => item.sex === 'K').length;
  }

  private setDeathsByYearData(allPeople: Person[]) {
    if (this.allMenCount && this.allWomenCount) {
      for (let year = 1943; year <= new Date().getFullYear(); year++) {
        const peopleByYear = allPeople.filter((person) => person.deathDate.includes(year.toString())).length;
        this.peopleByYearArray.push(peopleByYear);
        this.deathYears.push(year.toString());
      }
    }
  }

  private getDbDate(): string {
    return this.dataService.getDbDate();
  }
}
