import { StatsService } from './services/stats.service';
import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cemetery';
  styles = {
    // 'background': 'url("assets/img/home-wide.jpg") no-repeat center center fixed',
    'background': 'url(https://c.pxhere.com/photos/46/b1/cross_faith_wooden_cross_christianity_jesus_church_catholicism_symbol-529148.jpg!d) no-repeat center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'height': 'auto',
    'min-height': '100vh',
    'background-size': 'cover',
    'width': '100%',
	  'background-position': 'center',
    // 'filter': 'grayscale(100%)'
  }

  constructor(private dataService: DataService, private statsService: StatsService) {}
}
