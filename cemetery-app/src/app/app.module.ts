import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { SharedModule } from './shared/shared.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LawRulesComponent } from './pages/law-rules/law-rules.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        HomeComponent,
        AnniversaryComponent,
        HeaderComponent,
        ContactComponent,
        LawRulesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        NgImageSliderModule,
        SharedModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
