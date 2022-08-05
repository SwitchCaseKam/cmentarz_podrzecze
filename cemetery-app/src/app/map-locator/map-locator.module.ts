import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapLocatorRoutingModule } from './map-locator-routing.module';
import { MapLocatorComponent } from './map-locator.component';
import { MapComponent } from './map/map.component';
import { SearcherComponent } from './searcher/searcher.component';
import { DetailsComponent } from './details/details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgImageSliderModule } from 'ng-image-slider';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MapComponent,
    SearcherComponent,
    DetailsComponent,
    MapLocatorComponent,
  ],
  imports: [
    CommonModule,
    MapLocatorRoutingModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgImageSliderModule,
    SharedModule
  ]
})
export class MapLocatorModule { }
