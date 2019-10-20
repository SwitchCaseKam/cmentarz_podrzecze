import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  allPeople: any;
  allMen: any;
  allWomen: any;

  allPeopleCount: number;
  allMenCount: number; 
  allWomenCount: number;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPeople();
    this.dataService.getAllPeople().subscribe(data => {
      this.allPeople = data;
      this.allPeopleCount = data.length;
    });
    
    this.dataService.getMen();
    this.dataService.getAllMen().subscribe(data => {
      this.allMen = data;
      this.allMenCount = data.length;
    });

    this.dataService.getWomen();
    this.dataService.getAllWomen().subscribe(data => {
      this.allWomen = data;
      this.allWomenCount = data.length;
    });
  }


}
