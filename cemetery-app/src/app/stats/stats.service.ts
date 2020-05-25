import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../person.model';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public allPeopleSubject = new BehaviorSubject<Person[]>([]);

  constructor(private dateService: DataService) { }


}
