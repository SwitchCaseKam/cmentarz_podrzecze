import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input()
  public spinnerText: string;

  constructor() { }

  public ngOnInit(): void {
    if (!this.spinnerText) { this.spinnerText = 'Czekaj'}
  }

}
