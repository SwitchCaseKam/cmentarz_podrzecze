import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { DataService } from '../data.service';
import { MarkTombService } from '../mark-tomb.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})

export class SearcherComponent implements OnInit, OnDestroy {
  public  myControl = new FormControl();
  public filteredOptions: Observable<string[]>;
  private options: string[] = [];
  private allPeople: Person[];
  private chosenTombId: string;
  private x = '-10%';
  private y = '-10%';
  private peopleDataSubscription: Subscription;

  constructor(private dataService: DataService, private markTombService: MarkTombService) { }

  public ngOnInit() {
    this.peopleDataSubscription = this.dataService.getAllPeople().subscribe((allPeople: Person[]) => {
      this.allPeople = allPeople;
      this.createPeopleOptions();
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  public ngOnDestroy(): void {
    this.peopleDataSubscription.unsubscribe();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private createPeopleOptions(): void {
    for (const person of this.allPeople) {
      this.options.push(person.tombId + ' ' + person.name + ' ' + person.surname);
    }
  }

  public getChosenPerson(searchInput: string): void {
    this.chosenTombId = searchInput.split(' ')[0];
  }

  public getTombInfo(): void {
    const element = document.getElementById(this.chosenTombId);
    this.markTombService.updateValuesByHtmlElement(element);
    this.markTombService.getXValue().subscribe(xVal => this.x = xVal);
    this.markTombService.getYValue().subscribe(yVal => this.y = yVal);
    this.dataService.getInfoAboutTomb(this.chosenTombId);
  }
}
