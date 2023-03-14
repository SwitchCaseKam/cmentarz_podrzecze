
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TombMarkerService } from 'src/app/services/tomb-marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  public x = '-10%';
  public y = '-10%';

  constructor(
    public dialog: MatDialog,
    private tombMarkerService: TombMarkerService,
    private renderer2: Renderer2
  ) { }

  public ngOnInit(): void {
    this.tombMarkerService.getXValue().subscribe(xVal => this.x = xVal);
    this.tombMarkerService.getYValue().subscribe(yVal => this.y = yVal);
  }

  public ngAfterViewInit(): void {
    const tombs = Array.from(document.getElementsByClassName('tomb'));
    tombs.forEach(tomb => this.renderer2.listen(tomb, 'click', () => this.getTombInfo(tomb)));
  }

  public getTombInfo(element: Element): void {
    this.tombMarkerService.redirectToMapAndMarkTomb(parseInt(element.id));
  }
}
