import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MarkTombService } from '../mark-tomb.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {

  isClicked = false;
  x: any = '-10%';
  y: any = '-10%';

  constructor(private dataService: DataService, private markTombService: MarkTombService) {
    
   }

  ngOnInit() {
    this.markTombService.getXValue().subscribe(data => this.x = data);
    this.markTombService.getYValue().subscribe(data => this.y = data);
  }

  getTombInfo(event) {
    console.log('getTombInfo - event');
    console.log(event);
    
    // this.markTombService.getXValue().subscribe(data => this.x = data);
    // this.markTombService.getYValue().subscribe(data => this.y = data);
    this.dataService.getInfoAboutTomb(event.target.id);
    this.markTombService.updateValues(event.target.x.animVal.value + event.target.width.animVal.value/2 + '%',
    event.target.y.animVal.valueInSpecifiedUnits + 1.5*event.target.height.animVal.value + '%')
  

  }
  
  
}
