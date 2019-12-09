import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import {
  Image,
} from 'angular-modal-gallery';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  people: any;
  peopleCount: number = -1;
  graveCandleVisible;
  currentTombId: any; 
  images: Image[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurrentTombId().subscribe(
      data => {
        this.currentTombId = data;
        console.log('../../assets/img/cemetery-' + this.currentTombId.toString() + '.jpg')
        this.images = [
          new Image(0, {
            img: '../../assets/img/cemetery-' + this.currentTombId.toString() + '.jpg'
          }),
          // new Image(1, {
          //   img: '../../assets/img/cemetery-' + this.currentTombId + '.jpg'
          // }),
          // new Image(2, {
          //   img: '../../assets/img/cemetery-' + this.currentTombId + '.jpg'
          // })
        ];
      }
    )
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

// Licence for angular-modal-gallery
// The MIT License (MIT)

// Copyright (c) 2017-2018 Stefano Cappa (Ks89)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.