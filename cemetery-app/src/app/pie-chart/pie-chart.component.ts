// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pie-chart',
//   templateUrl: './pie-chart.component.html',
//   styleUrls: ['./pie-chart.component.css']
// })
// export class PieChartComponent implements OnInit {


//   constructor() { }

//   ngOnInit() {
    
//   }

    

// }

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

 
@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html'
})
 
export class PieChartComponent implements OnInit {
  
  public pieChartLabels = ['Kobiety', 'Mężczyzni'];
  public pieChartData = [137, 200];
  public pieChartType = 'pie';

  
  allPeople: any;
  allMen: any;
  allWomen: any;

  allPeopleCount: number;
  allMenCount: number; 
  allWomenCount: number;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getPeople();
    // this.dataService.getAllPeople().subscribe(data => {
    //   this.allPeople = data;
    //   this.allPeopleCount = data.length;
    //   this.pieChartData = [];
    // });
    
    // this.dataService.getMen();
    // this.dataService.getAllMen().subscribe(data => {
    //   this.allMen = data;
    //   this.allMenCount = data.length;
    //   this.pieChartData.push(data.length);
    // });

    // this.dataService.getWomen();
    // this.dataService.getAllWomen().subscribe(data => {
    //   this.allWomen = data;
    //   this.allWomenCount = data.length;
    //   this.pieChartData.push(data.length);
    // });

    // this.pieChartData = [137, 200];
    // console.log(this.pieChartData)
  }

  setValues() {
    this.pieChartData = [this.allMenCount, this.allWomenCount]
  }
}
