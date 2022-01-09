import { SexesStats, DeathsByYear } from './../models/stats.model';
import { Person } from './../models/person.model';
import { DataService } from 'src/app/services/data.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private deathsByYearMap: Map<string, Person[]> = new Map();
  private deathsByYearMapSubject = new BehaviorSubject<Map<string, Person[]>>(this.deathsByYearMap);

  private deathsByYeatStats: DeathsByYear = {years: [], numberOfDeaths: []}
  private sexesStats: SexesStats = {numberOfAllMen: 0, numberOfAllWomen: 0};

  constructor(private dataService: DataService) {
    this.prepareDeathsByYearData();
   }

  public getDeathsByYearStatsSubject(): Observable<Map<string, Person[]>> {
    return this.deathsByYearMapSubject.asObservable();
  }

  public getSexesStats(): SexesStats {
    return this.sexesStats;
  }

  public getDeathsByYearStats(): DeathsByYear {
    return this.deathsByYeatStats;
  }

  public getPeopleByYear(year: string): Person[] {
    return this.deathsByYearMap.get(year);
  }

  private prepareDeathsByYearData() {
    this.dataService.getAllPeopleSubject().subscribe((people: Person[]) => {
      if (people?.length > 0) {
        this.setDeathsByYearStats(people);
        this.setSexesStats(people);
        this.deathsByYearMapSubject.next(this.deathsByYearMap);
      }
    });
  }

  private setDeathsByYearStats(people: Person[]): void {
    for (let year = 1943; year <= new Date().getFullYear(); year++) {
      const peopleByYear = people.filter((person) => person.deathDate.includes(year.toString()));
      this.deathsByYearMap.set(year.toString(), peopleByYear);
      this.deathsByYeatStats.years.push(year.toString());
      this.deathsByYeatStats.numberOfDeaths.push(peopleByYear.length);
    }
  }

  private setSexesStats(people: Person[]): void {
    for (const person of people) {
      person.sex === 'M' ? this.sexesStats.numberOfAllMen++ : this.sexesStats.numberOfAllWomen++;
    }
  }


}
