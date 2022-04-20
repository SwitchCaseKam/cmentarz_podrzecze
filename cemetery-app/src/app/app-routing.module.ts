import { GalleryComponent } from './components/gallery/gallery.component';
import { LawRulesComponent } from './components/law-rules/law-rules.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ListComponent } from './components/list/list.component';
import { LocatorComponent } from './components/locator/locator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  // { path: 'mapa', component: LocatorComponent },
  // { path: 'statystyki', component: StatsComponent },
  // { path: 'lista', component: ListComponent },
  { path: 'rocznice', component: AnniversaryComponent },
  { path: 'galeria', component: GalleryComponent },
  // { path: 'kontakt', component: ContactComponent },
  { path: 'informacje', component: LawRulesComponent },
  { path: 'mapa', loadChildren: () => import('./map-locator/map-locator.module').then(m => m.MapLocatorModule) },
  { path: 'statystyki', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) },
  { path: 'lista', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'kontakt', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '**', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LocatorComponent, StatsComponent, HomeComponent, AnniversaryComponent,
  ContactComponent, LawRulesComponent, GalleryComponent
]
