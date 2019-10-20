import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  people: any;
  peopleCount: number = -1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPeople();
    this.dataService.getAllPeople().subscribe(data => {
      this.people = data;
      this.peopleCount = data.length; 
    });    
  }

}
