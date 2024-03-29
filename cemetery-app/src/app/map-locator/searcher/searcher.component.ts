import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { startWith, map} from 'rxjs/operators';
import { Person } from 'src/app/models/person.model';
import { TombMarkerService } from 'src/app/services/tomb-marker.service';
import { SearchDetailsComponent } from './search-details/search-details.component';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit, OnDestroy {

  @Input()
  public allPeople: Person[];

  public searchField = new UntypedFormGroup({});
  public filteredPeopleSearchOptions: Observable<string[]>;
  private peopleDataSubscription: Subscription;
  private peopleSearchOptions: string[] = [];
  private searchTombId: string;

  constructor(
    public dialog: MatDialog,
    private formBuilder: UntypedFormBuilder,
    private tombMarkerService: TombMarkerService
  ) { }

  public ngOnInit(): void {
    this.preparePeopleToSearch();
    this.searchField = this.createSearchField();
    this.filteredPeopleSearchOptions = this.searchField.get('search').valueChanges.pipe(
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
    const searchTombId = Number(this.searchField.value.search.split(' ')[0]);
    const typedText = this.searchField.value.search;
    if (!searchTombId) {
      const foundPeople = this.allPeople.filter(
        p => 
          p.name.toLocaleLowerCase() === typedText.toLocaleLowerCase()
          || p.surname.toLocaleLowerCase() === typedText.toLocaleLowerCase());
      const dialogRef = this.dialog.open(SearchDetailsComponent);
      dialogRef.componentInstance.people = foundPeople;
      dialogRef.afterClosed().subscribe();
      return;
    }
    
    this.tombMarkerService.redirectToMapAndMarkTomb(searchTombId);
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

  private createSearchField(): UntypedFormGroup {
    return this.formBuilder.group({
      search: new UntypedFormControl('')
    });
  }

}
