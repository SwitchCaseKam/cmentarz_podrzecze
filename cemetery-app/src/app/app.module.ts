import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocatorComponent } from './components/locator/locator.component';
import { MapComponent } from './components/locator/map/map.component';
import { SearcherComponent } from './components/locator/searcher/searcher.component';
import { DetailsComponent } from './components/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { StatsComponent } from './components/stats/stats.component';
import { BarChartComponent } from './components/stats/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/stats/charts/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarDetailsComponent } from './components/stats/charts/bar-chart/bar-details/bar-details.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ListComponent } from './components/list/list.component';
import { PeopleTableComponent } from './components/list/people-table/people-table.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { GeneralInfoComponent } from './components/stats/general-info/general-info.component';
import { ContactComponent } from './components/contact/contact.component';
import { LawRulesComponent } from './components/law-rules/law-rules.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    LocatorComponent,
    MapComponent,
    SearcherComponent,
    DetailsComponent,
    StatsComponent,
    BarChartComponent,
    PieChartComponent,
    BarDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AnniversaryComponent,
    ListComponent,
    PeopleTableComponent,
    SpinnerComponent,
    GeneralInfoComponent,
    ContactComponent,
    LawRulesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ChartsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailsComponent, BarDetailsComponent]
})
export class AppModule { }
