import { AnniversaryComponent } from './anniversary/anniversary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawRulesComponent } from './pages/law-rules/law-rules.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'mapa', loadChildren: () => import('./map-locator/map-locator.module').then(m => m.MapLocatorModule) },
  { path: 'statystyki', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) },
  { path: 'lista', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'galeria', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
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
  ContactComponent, LawRulesComponent
]
