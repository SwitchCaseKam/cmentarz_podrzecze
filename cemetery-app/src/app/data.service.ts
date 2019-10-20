import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Person } from './person.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = 'https://test-node-tomb-server.herokuapp.com';
  currentTomb = new Subject<any>();
  allPeople = new Subject<any>();
  allMen  = new Subject<any>();
  allWomen = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getPeople(url?: string){
    this.httpClient.get(`${this.apiUrl}/people`).subscribe((res)=>{
      this.allPeople.next(res);
      console.log(this.allPeople);
    });
  };
  
  public getTombById(id: string){
    this.httpClient.get(`${this.apiUrl}/people?tombId=${id}`).subscribe((res)=>{
      this.currentTomb.next(res);
    });
  };

  public getCurrentTomb(): Observable<any> {
    return this.currentTomb.asObservable();
  }

  public getMen(url?: string){
    this.httpClient.get(`${this.apiUrl}/people?sex=M`).subscribe((res)=>{
      this.allMen.next(res);
    });
  };

  public getWomen(url?: string){
    this.httpClient.get(`${this.apiUrl}/people?sex=K`).subscribe((res)=>{
      this.allWomen.next(res);
    });
  };

  public getAllMen(): Observable<any> {
    return this.allMen.asObservable();
  }

  public getAllWomen(): Observable<any> {
    return this.allWomen.asObservable();
  }

  public getAllPeople(): Observable<any> {
    return this.allPeople.asObservable();
  }

  getInfoAboutTomb(tombId: string) {
    this.getTombById(tombId);
  }
}
