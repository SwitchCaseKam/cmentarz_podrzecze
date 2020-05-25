import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import {
  Image,
} from 'angular-modal-gallery';
import { Person } from '../person.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  public people: Person[];
  public peopleCount = -1;
  public graveCandleVisible = false;
  public currentTombId: number;
  public pictureFlag: boolean;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurrentTomb().subscribe((peopleInCurrentTomb: Map<number, Person[]>) => {
      this.clearGraveCandle();
      this.currentTombId = peopleInCurrentTomb.keys().next().value;
      this.people = peopleInCurrentTomb.get(this.currentTombId);
      this.peopleCount = peopleInCurrentTomb.get(this.currentTombId).length;
    });

    this.dataService.getPictureFlag().subscribe((pictureFlag: boolean) => {
      this.pictureFlag = pictureFlag;
    });
  }

  showGraveCandle(): void {
    this.graveCandleVisible = true;
  }

  clearGraveCandle(): void {
    this.graveCandleVisible = false;
  }

  zoomPicture(event){
    const modal = document.getElementById('pictureModal');
    const img = document.getElementById(event.target.id);
    const modalImg = document.getElementById('pictureInModal');

    modal.style.display = 'block';
    modalImg['src'] = img['src'];
  }

  closeZoomedPicture() {
    const modal = document.getElementById('pictureModal');
    modal.style.display = 'none';
  }

}

// Licence for angular-modal-gallery
// The MIT License (MIT)

// Copyright (c) 2017-2018 Stefano Cappa (Ks89)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
