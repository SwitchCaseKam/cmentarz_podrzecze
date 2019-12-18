import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cemetery-layout',
  templateUrl: './cemetery-layout.component.html',
  styleUrls: ['./cemetery-layout.component.css']
})
export class CemeteryLayoutComponent implements OnInit {

  connectionStatus: any = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPeople();
    this.dataService.getAllPeople().subscribe(
      data => {
        this.connectionStatus = true;
      }
    )
  }
}
