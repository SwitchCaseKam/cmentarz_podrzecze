import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MarkTombService } from '../mark-tomb.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {

  public x = '-10%';
  public y = '-10%';

  constructor(private dataService: DataService, private markTombService: MarkTombService) {}

  ngOnInit() {
    this.markTombService.getXValue().subscribe(xVal => this.x = xVal);
    this.markTombService.getYValue().subscribe(yVal => this.y = yVal);
  }

  public getTombInfo(event): void {
    this.dataService.getInfoAboutTomb(event.target.id);
    this.markTombService.updateValuesByHtmlElement(event.target);
  }
}
