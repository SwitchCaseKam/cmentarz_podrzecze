import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/operators';
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
    this.dataSubscription = this.dataService.getAllPeopleSubject().pipe(
      // filter((d: Person[]) => d.length > 0)
      ).subscribe(
      (data: Person[]) => this.data = data);
  }

  public ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
