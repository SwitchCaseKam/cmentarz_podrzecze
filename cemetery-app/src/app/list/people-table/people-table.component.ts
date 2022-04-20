import { TombMarkerService } from 'src/app/services/tomb-marker.service';
import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent {

  @Input()
  public allPeople: Person[];

  constructor(private tombMarkerService: TombMarkerService) { }

  public onRowClick(tombId: number): void {
    this.tombMarkerService.redirectToMapAndMarkTomb(tombId, 500);
  }
}
