import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { DataService } from '../data.service';
import { MarkTombService } from '../mark-tomb.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})

export class SearcherComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  allPeople: any;
  chosenTombId: string;
  x: any = '-10%';
  y: any = '-10%';

  constructor(private dataService: DataService, private markTombService: MarkTombService) { }

  ngOnInit() {
    this.dataService.getPeople();
    this.dataService.getAllPeople().subscribe(data => {
      
      this.allPeople = data;
      this._createPeopleOptions(this.allPeople);
      
    });
   
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _createPeopleOptions(allPeople: any) {

    for (let person of this.allPeople) {
      this.options.push(person.tombId + " " + person.name + " " + person.surname);
    }
  }

  public getChosenPerson(value) {
    this.chosenTombId = value.split(' ')[0];
  }

  public getTombInfo(event) {
    console.log('event');
    console.log(event);
    let element = document.getElementById(this.chosenTombId);
    this.markTombService.updateValuesByHtmlElement(element);
    this.markTombService.getXValue().subscribe(data => this.x = data);
    this.markTombService.getYValue().subscribe(data => this.y = data);
    
    this.dataService.getInfoAboutTomb(this.chosenTombId);
    
    console.log('Tomb parameters');
    
    
    

    // console.log(element.x.animVal.value);
    // console.log(element.y.animVal.valueInSpecifiedUnits);
    // console.log(element.height.animVal.value);
    // console.log(element.width.animVal.value);




  }



}
