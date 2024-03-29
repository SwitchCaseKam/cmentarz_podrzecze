import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';
import { DatabaseDate } from '../models/databaseDate.model';
import { AuthToken } from '../models/authToken.model';
import { forkJoin, Observable } from 'rxjs';

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
  // private apiUrl = 'https://cmentarze.online/podrzecze-db';

  constructor(private http: HttpClient) { }

  public getAuthToken(): Observable<AuthToken> {
    return this.http.post<AuthToken>(
      `${this.apiUrl}/${tombServerEndpoints.TOKEN_SIGN}`, { access: true });
  }

  public getDbData(): Observable<{date: DatabaseDate; people: Person[];}> {
    return forkJoin({
      date: this.getDatabaseDate(),
      people: this.getAllPeople()
    });
  }

  private getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/${tombServerEndpoints.PEOPLE}`);
  }

  private getDatabaseDate(): Observable<DatabaseDate> {
    return this.http.get<DatabaseDate>(`${this.apiUrl}/${tombServerEndpoints.DATE}`);
  }
}
