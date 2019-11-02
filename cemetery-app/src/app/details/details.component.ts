import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  people: any;
  peopleCount: number = -1;
  graveCandleVisible = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurrentTomb().subscribe(data => {
      this.people = data;
      this.peopleCount = data.length; 
    });
  }

  showGraveCandle(event) {
    this.graveCandleVisible = true;
  }

  clearGraveCandle(event){
    this.graveCandleVisible = false;
  }
}
