import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  people: any;
  peopleCount: number = -1;
  graveCandleVisible;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.graveCandleVisible = this.dataService.getGraveCandle().subscribe(
      data => this.graveCandleVisible = data
    );
    this.dataService.getCurrentTomb().subscribe(data => {
      this.people = data;
      this.peopleCount = data.length; 
    });
  }

  showGraveCandle(event) {
    this.dataService.setGraveCandle(true);
  }

  clearGraveCandle(){
    this.graveCandleVisible = this.dataService.getGraveCandle();
  }
}
