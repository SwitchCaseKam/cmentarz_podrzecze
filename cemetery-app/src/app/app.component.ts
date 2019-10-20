import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MarkTombService } from './mark-tomb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, MarkTombService]
})
export class AppComponent implements OnInit {
  title = 'cemetery-app';

  constructor(private dataService: DataService, private markTombService: MarkTombService){}

  ngOnInit(): void {
    

  }
}
