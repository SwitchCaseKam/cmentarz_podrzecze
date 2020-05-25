import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Person } from './person.model';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { DbDate } from './dbDate.model';
import { retry, delay, retryWhen, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://test-node-tomb-server.herokuapp.com';
  private currentTomb = new Subject<Map<number, Person[]>>();

  private allPeople: Person[];
  private allMen: Person[];
  private allWomen: Person[];

  private allPeopleSubject = new BehaviorSubject<Person[]>([]);
  private allMenSubject  = new BehaviorSubject<Person[]>([]);
  private allWomenSubject = new BehaviorSubject<Person[]>([]);

  private pictureFlag = new Subject<boolean>();

  private dbDateSubject = new Subject<string>();
  private dbDate: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
    this.getAllPeopleApi();
    this.getDbDateApi();
  }

  private getAllPeopleApi(): void {
    const allPeopleSubscription = this.httpClient.get<Person[]>(`${this.apiUrl}/people`).pipe(
      retryWhen(errors => errors.pipe(
        switchMap((error) => {
            return of(error);
        }),
      )),
      delay(5000)
    ).subscribe(
      (allPeople: Person[]) => {
        this.allPeople = allPeople;
        this.allPeopleSubject.next(this.allPeople);
        allPeopleSubscription.unsubscribe();
      }
    );
  }

  private getAllMenApi(): void {
    const allMenSubscription = this.httpClient.get<Person[]>(`${this.apiUrl}/people?sex=M`).subscribe(
      (allMen: Person[]) => {
        this.allMen = allMen;
        this.allMenSubject.next(this.allMen);
        allMenSubscription.unsubscribe();
      }
    );
  }

  private getAllWomenApi(): void {
    const allWomenSubscription = this.httpClient.get<Person[]>(`${this.apiUrl}/people?sex=K`).subscribe(
      (allWomen: Person[]) => {
        this.allWomen = allWomen;
        this.allWomenSubject.next(this.allWomen);
        allWomenSubscription.unsubscribe();
      }
    );
  }

  private getDbDateApi(): void {
    const dbDateSubscription = this.httpClient.get<DbDate[]>(`${this.apiUrl}/date`).subscribe(
      (dbDate: DbDate[]) => {
        this.dbDate = dbDate[0].modifiedDate;
        this.dbDateSubject.next(this.dbDate);
        dbDateSubscription.unsubscribe();
      }
    );
  }

  public getTombById(id: number): void {
    const currentTomb = new Map<number, Person[]>();
    const peopleInCurrentTomb = this.allPeople.filter((person: Person) => person.tombId === id);
    currentTomb.set(id, peopleInCurrentTomb);
    this.currentTomb.next(currentTomb);
    console.log(currentTomb);
  }

  public getCurrentTomb(): Observable<Map<number, Person[]>> {
    return this.currentTomb.asObservable();
  }

  public getAllMen(): Observable<Person[]> {
    return this.allMenSubject.asObservable();
  }

  public getAllWomen(): Observable<Person[]> {
    return this.allWomenSubject.asObservable();
  }

  public getAllPeople(): Observable<Person[]> {
    return this.allPeopleSubject.asObservable();
  }

  getInfoAboutTomb(tombId: string): void {
    this.pictureFlag.next(this.checkIfPictureExist(tombId));
    this.getTombById(parseInt(tombId));
  }

  private checkIfPictureExist(tombId): boolean {
    console.log(tombId);
    const pictures = ['121', '305', '303', '302']
    for (const pictureId of pictures) {
      if (pictureId === tombId) {
        return true;
      }
    }
    return false;
  }

  public getPictureFlag(): Observable<boolean> {
    return this.pictureFlag.asObservable();
  }

  public getCurrentYear(): number {
    const year = new Date().getFullYear().toString();
    return this.allPeople.filter(people => people.deathDate.includes(year)).length;
  }

  public getDbDateSubject(): Observable<string> {
    return this.dbDateSubject.asObservable();
  }

  public getDbDate(): string {
    return this.dbDate;
  }
}
