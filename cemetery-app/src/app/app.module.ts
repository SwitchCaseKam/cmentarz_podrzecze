import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

import { DetailsComponent } from './details/details.component';
import { TombComponent } from './tomb/tomb.component';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CemeteryLayoutComponent } from './cemetery-layout/cemetery-layout.component';
import { SearcherComponent } from './searcher/searcher.component';
import { MapaComponent } from './mapa/mapa.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { CookieLawModule } from 'angular2-cookie-law';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    routingComponents,
    DetailsComponent,
    TombComponent,
    HomeComponent,
    CemeteryLayoutComponent,
    SearcherComponent,
    MapaComponent,
    BarChartComponent,
    PieChartComponent,
    ContactComponent,
    PeopleTableComponent,
    RulesComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    CookieLawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
