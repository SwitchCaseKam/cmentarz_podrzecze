import { AfterViewInit, Component, ElementRef, OnInit, } from '@angular/core';
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
  styles = {
    'background': 'url(./assets/img/home-1.jpg) no-repeat center center fixed',
    'height': 'auto',
    'min-height': '100vh',
    'background-size': 'cover',
	  'background-position': 'center'
  }

  constructor(private dataService: DataService, private markTombService: MarkTombService) {}

  ngOnInit(): void {


  }
}
