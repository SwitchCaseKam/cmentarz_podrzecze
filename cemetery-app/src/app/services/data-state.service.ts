import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {

  private currentTombId: number;
  private peopleInCurrentTomb: Person[] = [];
  private pictures: string[] = [];

  constructor(private dataService: DataService) { }

  public setTombId(tombId: number) {
    this.currentTombId = tombId;
    this.peopleInCurrentTomb = this.dataService.getTombData(this.currentTombId);
    this.parseCurrentTombPictures();
  }

  public getTombId(): number {
    return this.currentTombId;
  }

  public getPeopleInCurrentTomb(): Person[] {
    return this.peopleInCurrentTomb;
  }

  public getPicturesForCurrentTomb(): string[] {
    return this.pictures;
  }

  private parseCurrentTombPictures(): void {
    this.peopleInCurrentTomb?.forEach((person: Person) => {
        this.pictures = person.pictures
    });
  }
}
