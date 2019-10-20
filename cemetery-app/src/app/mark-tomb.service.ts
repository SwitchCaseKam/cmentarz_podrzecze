import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkTombService {

  xValue = new Subject<any>();
  yValue = new Subject<any>();

  constructor() { }
  

  public updateValues(x, y) {
    this.xValue.next(x);
    this.yValue.next(y);
  }

  public getXValue(): Observable<any> {
    return this.xValue.asObservable();
  }

  public getYValue(): Observable<any> {
    return this.yValue.asObservable();
  }

  public updateValuesByHtmlElement(element: any) {
    this.xValue.next(element.x.animVal.value + element.width.animVal.value/2 + '%');
    this.yValue.next(element.y.animVal.valueInSpecifiedUnits + 1.5*element.height.animVal.value + '%');
  }
}
