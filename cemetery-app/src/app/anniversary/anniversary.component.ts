import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {

  people: any;
  todayDateAndMonth: string;
  anniversaryPeople: any = [];
  anniversaryPeopleCount = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.todayDateAndMonth = this.getCurrentDate();
    this.dataService.getPeople();
    this.dataService.getAllPeople().subscribe(data => {
      this.people = data;
      this.checkAnniversary();
    });    
  }

  getCurrentDate(): string {
    let todayDate: string;
    let today = new Date();
    todayDate = today.getDate() + '.' + (today.getMonth() + 1);
    console.log('Today date:' + todayDate);
    return todayDate;
  }

  checkAnniversary() {
    for (let i in this.people) {
      let today = new Date();
      let date = this.people[i].deathDate.split('.')
      if (date.length == 3) {
        if (date[0] + '.' + date[1] === this.todayDateAndMonth) {
          let anniversaryCounter: number = today.getFullYear() - parseInt(date[2]);
          this.people[i]['anniversaryCounter'] = anniversaryCounter
          this.anniversaryPeople.push(this.people[i]);
          this.anniversaryPeopleCount = this.anniversaryPeople.length;
        }
      }
    }
  }


}
