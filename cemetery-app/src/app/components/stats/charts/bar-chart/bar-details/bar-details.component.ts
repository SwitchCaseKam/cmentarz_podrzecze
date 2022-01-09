import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { TombMarkerService } from 'src/app/services/tomb-marker.service';

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  public people: Person[] = [];
  public year: string;

  constructor(private tombMarkerService: TombMarkerService) { }

  public ngOnInit(): void {
  }

  public onRowClick(tombId: number, personId: number): void {
    this.tombMarkerService.redirectToMapAndMarkTomb(tombId, 500);

  }
}
