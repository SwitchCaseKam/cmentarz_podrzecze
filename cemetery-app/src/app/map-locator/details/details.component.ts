import { listFiles } from 'list-files-in-dir';
import { DataStateService } from './../../services/data-state.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public people: Person[] = [];
  public numberOfPeople: number = 0;
  public lightCandleClicked: boolean = false;
  public imageObject = [];

  constructor(private dataStateService: DataStateService) { }

  public ngOnInit(): void {
    this.people = this.dataStateService.getPeopleInCurrentTomb();
    if (this.people?.length > 0) { this.numberOfPeople = this.people.length; }
    this.getPictures();
  }

  public lightCandle(): void {
    this.lightCandleClicked = true;
  }

  private getPictures(): void {
    const currentPictures = this.dataStateService.getPicturesForCurrentTomb();
    currentPictures?.forEach((pictureLink: string, index: number) => {
      this.imageObject.push(
        {
          image: pictureLink,
          thumbImage: pictureLink,
          title: `${index+1}/${currentPictures.length}`
        }
      )
    });
  }
}
