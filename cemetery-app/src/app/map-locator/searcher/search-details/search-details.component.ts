import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { TombMarkerService } from 'src/app/services/tomb-marker.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnDestroy, OnInit {

  @Input() people: Person[] = [];

  constructor(private tombMarkerService: TombMarkerService) { }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void{

  }

  public onRowClick(tombId: number): void {
    this.tombMarkerService.redirectToMapAndMarkTomb(tombId, 500);
    this.ngOnDestroy()
  }
}
