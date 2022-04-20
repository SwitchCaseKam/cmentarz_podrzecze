import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  @Input()
  public numberOfAllMen: number;
  @Input()
  public numberOfAllWomen: number;

  public numberOfAllPeople: number;

  constructor() { }

  public ngOnInit(): void {
    this.numberOfAllPeople = Number(this.numberOfAllMen) + Number(this.numberOfAllWomen);
  }

}
