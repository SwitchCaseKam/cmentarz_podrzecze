import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { startWith, map} from 'rxjs/operators';
import { Person } from 'src/app/models/person.model';
import { DataService } from 'src/app/services/data.service';
import { TombMarkerService } from 'src/app/services/tomb-marker.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit, OnDestroy {

  @Input()
  public allPeople: Person[];

  public myControl = new FormControl();
  public filteredPeopleSearchOptions: Observable<string[]>;
  private peopleDataSubscription: Subscription;
  private peopleSearchOptions: string[] = [];
  private searchTombId: string;

  constructor(
   public dialog: MatDialog,
   private dataService: DataService,
   private tombMarkerService: TombMarkerService) { }

  public ngOnInit(): void {
    this.preparePeopleToSearch();
    this.filteredPeopleSearchOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filterPeople(value))
      );
  }

  public ngOnDestroy(): void {
    this.peopleDataSubscription?.unsubscribe();
  }

  public getChosenPerson(searchInput: string): void {
    this.searchTombId = searchInput.split(' ')[0];
  }

  public getTombInfo(): void {
    this.tombMarkerService.redirectToMapAndMarkTomb(parseInt(this.searchTombId));
  }

  public handleSearchEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.getTombInfo();
    }
  }

  private preparePeopleToSearch(): void {
    for (const person of this.allPeople) {
      this.peopleSearchOptions.push(person.tombId + ' ' + person.name + ' ' + person.surname);
    }
  }

  private filterPeople(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.peopleSearchOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

}
