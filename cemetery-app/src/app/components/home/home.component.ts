import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Person } from 'src/app/models/person.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public data: Person[] = undefined;
  private dataSubscription = new Subscription();

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataSubscription = this.dataService.getAllPeopleSubject().subscribe(
      (date: Person[]) =>  this.data = date);
  }

  public ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
