import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';
import { DatabaseDate } from '../models/databaseDate.model';
import { AuthToken } from '../models/authToken.model';
import { forkJoin, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

enum tombServerEndpoints {
  PEOPLE = 'people',
  DATE = 'date',
  TOKEN_SIGN = 'token/sign'
}

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  // private apiUrl = 'http://localhost:3000';
  // private apiUrl = 'https://test-node-tomb-server.herokuapp.com';
  private apiUrl = 'https://test-nodejs-mysql-app.herokuapp.com';

  constructor(private http: HttpClient, private dbFirebaseService: AngularFirestore) { }

  public getAuthToken(): Observable<AuthToken> {
    return this.http.post<AuthToken>(
      `${this.apiUrl}/${tombServerEndpoints.TOKEN_SIGN}`,
      { userName: 'podrzecze-root', password: 'podrzecze-root' }
    );
  }

  public getDbData(): Observable<{date: DatabaseDate; people: Person[];}> {
    return forkJoin({
      date: this.getDatabaseDate(),
      people: this.getAllPeople()
    });
  }

  public getPeopleData() {
    return this.dbFirebaseService.collection('people').valueChanges();
  }

  private getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/${tombServerEndpoints.PEOPLE}`);
  }

  private getDatabaseDate(): Observable<DatabaseDate> {
    return this.http.get<DatabaseDate>(`${this.apiUrl}/${tombServerEndpoints.DATE}`);
  }
}
