import { GalleryComponent } from './components/gallery/gallery.component';
import { LawRulesComponent } from './components/law-rules/law-rules.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'mapa', loadChildren: () => import('./map-locator/map-locator.module').then(m => m.MapLocatorModule) },
  { path: 'statystyki', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) },
  { path: 'lista', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'galeria', component: GalleryComponent },
  { path: 'informacje', component: LawRulesComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '**', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, AnniversaryComponent,
  ContactComponent, LawRulesComponent, GalleryComponent
]
