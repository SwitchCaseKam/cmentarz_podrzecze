import { DatabaseDate } from './../models/databaseDate.model';
import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Person } from '../models/person.model';
import { delay, retryWhen, switchMap, tap } from 'rxjs/operators';
import { AuthToken } from '../models/authToken.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private authToken: string = '';

  private allPeople: Person[] = [];
  private allPeopleSubject = new BehaviorSubject<Person[]>(this.allPeople);

  private databaseDate: string = '';
  private databaseDateSubject = new BehaviorSubject<string>(this.databaseDate);

  private tombPeopleMap: Map<number, Person[]> = new Map();

  private anniversaryPeople: Person[] = [];
  private anniversaryPeopleSubject = new BehaviorSubject<Person[]>(this.anniversaryPeople);

  constructor(private dataApiService: DataApiService) {}

  public getDataFromServer(): void {
    this.getAllPeople();
    // this.getDatabaseDate();
  }

  public getAuthToken(): string {
    return this.authToken;
  }

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public getAllPeopleSubject(): Observable<Person[]> {
    return this.allPeopleSubject.asObservable();
  }

  public getDatabaseDateSubject(): Observable<string> {
    return this.databaseDateSubject.asObservable();
  }

  public getAnniversaryPeople(): Observable<Person[]> {
    return this.anniversaryPeopleSubject.asObservable();
  }

  public getTombData(tombId: number): Person[] {
    return this.tombPeopleMap.get(tombId);
  }

  private getAllPeople(): void {
    this.dataApiService.getAuthToken().pipe(
      tap((authToken: AuthToken) => this.setAuthToken(authToken.token)),
      switchMap(() =>  this.dataApiService.getAllPeople())
    ).subscribe(
      (people: Person[]) => {
        this.allPeople = people;
        this.allPeopleSubject.next(this.allPeople);
        this.createTombPeopleMap(this.allPeople);
        this.checkAnniversaries(this.allPeople);
      }
    );


    this.dataApiService.getAllPeople().pipe(
      retryWhen(errors => errors.pipe(
        switchMap((error) => {
            return of(error);
        }),
        delay(2000)
      )),
    ).subscribe(
      (people: Person[]) => {
        this.allPeople = people;
        this.allPeopleSubject.next(this.allPeople);
        this.createTombPeopleMap(this.allPeople);
        this.checkAnniversaries(this.allPeople);
      }
    );
  }

  private getDatabaseDate(): void {
    this.dataApiService.getDatabaseDate().subscribe(
      (dbDate: DatabaseDate) => {
        this.databaseDate = dbDate[0]?.modifiedDate;
        this.databaseDateSubject.next(this.databaseDate);
      }
    );
  }

  private createTombPeopleMap(allPeople: Person[]): void {
    allPeople.forEach((person: Person) => {
      let currentState = this.tombPeopleMap.get(person.tombId);
      if (currentState === undefined) {
        currentState = [];
        currentState.push(person);
      } else {
        currentState.push(person);
      }
      this.tombPeopleMap.set(person.tombId, currentState);
    });
  }

  private checkAnniversaries(allPeople: Person[]): void {
    const today = new Date();
    const todayDateAndMonth = this.getCurrentDate();
    const currentYear = today.getFullYear();
    allPeople.forEach((person: Person) => {
      const date = person.deathDate.split('.');
      if (date.length === 3) {
        if (date[0] + '.' + date[1] === todayDateAndMonth) {
          const anniversaryCounter: number = currentYear - parseInt(date[2]);
          person['anniversaryCounter'] = anniversaryCounter;
          // if (this.anniversaryPeople === undefined) {
          //   this.anniversaryPeople = [];
          // }
          this.anniversaryPeople.push(person);
        }
      }
    });
    this.anniversaryPeopleSubject.next(this.anniversaryPeople);
  }

  private getCurrentDate(): string {
    let todayDate: string;
    const today = new Date();
    const extra = today.getMonth() < 9 ? '0' : '';
    todayDate = today.getDate() + '.' + extra + (today.getMonth() + 1);
    return todayDate;
  }
}
