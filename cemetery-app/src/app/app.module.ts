import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ContactComponent } from './components/contact/contact.component';
import { LawRulesComponent } from './components/law-rules/law-rules.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/common/header/header.component';
// import { CommonComponentsModule } from './common-components/common-components.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    HeaderComponent,
    AnniversaryComponent,
    ContactComponent,
    LawRulesComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    MatCardModule,
    MatDialogModule,
    // CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
