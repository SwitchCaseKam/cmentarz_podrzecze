import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';
import { DatabaseDate } from '../models/databaseDate.model';
import { AuthToken } from '../models/authToken.model';
import { Observable } from 'rxjs';

enum tombServerEndpoints {
  PEOPLE = 'people',
  DATE = 'date',
  TOKEN_SIGN = 'token/sign'
}

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private apiUrl = 'http://localhost:3000';
  // private apiUrl = 'https://test-node-tomb-server.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/${tombServerEndpoints.PEOPLE}`);
  }

  public getDatabaseDate(): Observable<DatabaseDate> {
    return this.http.get<DatabaseDate>(`${this.apiUrl}/${tombServerEndpoints.DATE}`);
  }

  public getAuthToken(): Observable<AuthToken> {
    return this.http.get<AuthToken>(`${this.apiUrl}/${tombServerEndpoints.TOKEN_SIGN}`)
  }
}
