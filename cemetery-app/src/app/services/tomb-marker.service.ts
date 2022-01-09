import { DataStateService } from './data-state.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DetailsComponent } from '../components/details/details.component';

@Injectable({
  providedIn: 'root'
})
export class TombMarkerService {

  private xValue = new Subject<string>();
  private yValue = new Subject<string>();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private dataStateService: DataStateService
  ) { }

  public getXValue(): Observable<string> {
    return this.xValue.asObservable();
  }

  public getYValue(): Observable<string> {
    return this.yValue.asObservable();
  }

  public updateValuesByHtmlElement(element: any): void {
    this.xValue.next(element.x.animVal.value + element.width.animVal.value / 2 + '%');
    this.yValue.next(element.y.animVal.valueInSpecifiedUnits + 1.5 * element.height.animVal.value + '%');
  }

  public redirectToMapAndMarkTomb(tombId: number, delayTime = 100): void {
    try {
      if (!this.router.url.includes('mapa')) { this.router.navigateByUrl('mapa'); }
      this.dataStateService.setTombId(tombId);
      setTimeout(()=> {
        const element = document.getElementById(tombId.toString());
        this.updateValuesByHtmlElement(element);
      }, delayTime)
      setTimeout(()=> {
        const dialogRef = this.dialog.open(DetailsComponent, {position: {top: '2%'}});
        dialogRef.afterClosed().subscribe();
      }, delayTime);
    } catch {
      console.log('error');
    }

  }
}
