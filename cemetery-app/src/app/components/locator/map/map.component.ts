import { TombMarkerService } from './../../../services/tomb-marker.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public x = '-10%';
  public y = '-10%';

  constructor(
    public dialog: MatDialog,
    private tombMarkerService: TombMarkerService
  ) { }

  ngOnInit(): void {
    this.tombMarkerService.getXValue().subscribe(xVal => this.x = xVal);
    this.tombMarkerService.getYValue().subscribe(yVal => this.y = yVal);
  }

  public getTombInfo(event: Event) {
    this.tombMarkerService.redirectToMapAndMarkTomb(parseInt(event.target['id']));
  }
}
