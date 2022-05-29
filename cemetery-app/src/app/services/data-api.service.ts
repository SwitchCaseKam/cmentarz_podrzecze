import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';
import { DatabaseDate } from '../models/databaseDate.model';

enum tombServerEndpoints {
  PEOPLE = 'people',
  DATE = 'date'
}

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  // private apiUrl = 'http://localhost:3000';
  private apiUrl = 'https://test-node-tomb-server.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getAllPeople() {
    return this.http.get<Person[]>(`${this.apiUrl}/${tombServerEndpoints.PEOPLE}`);
  }

  public getDatabaseDate() {
    return this.http.get<DatabaseDate>(`${this.apiUrl}/${tombServerEndpoints.DATE}`);
  }
}
