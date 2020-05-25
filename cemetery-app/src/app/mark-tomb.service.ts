import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkTombService {

  private xValue = new Subject<string>();
  private yValue = new Subject<string>();

  constructor() { }

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
}
