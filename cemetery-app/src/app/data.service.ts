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
  currentTombId = new Subject<any>();
  public graveCandleFlag = new Subject<boolean>();
  pictureFlag = new Subject<boolean>();

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
      console.log(res);
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
    this.currentTombId.next(tombId);
    this.pictureFlag.next(this.checkIfPictureExist(tombId));
    console.log(this.pictureFlag);
    this.getTombById(tombId);
  }

  public getGraveCandle(): Observable<boolean> {
    return this.graveCandleFlag.asObservable();
  }

  public setGraveCandle(status: boolean): void{
    this.graveCandleFlag.next(status);
  }

  public getCurrentTombId(): Observable<any>{
    console.log(this.currentTombId);
    return this.currentTombId.asObservable();
  }

  checkIfPictureExist(tombId): boolean {
    let result = false;
    console.log(tombId);
    let pictures = ['121', '305', '303', '302']
    for (let pictureId of pictures) {
      if (pictureId === tombId) {
        result = true;
      }
    }
    return result;
  }

  getPictureFlag(): Observable<boolean> {
    return this.pictureFlag.asObservable();
  }
}
