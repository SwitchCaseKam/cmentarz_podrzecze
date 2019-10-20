import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { CemeteryLayoutComponent } from './cemetery-layout/cemetery-layout.component'
import { ContactComponent } from './contact/contact.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: 'map', component: CemeteryLayoutComponent },
  { path: 'stats', component: StatsComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'list', component: PeopleTableComponent }, 
  { path: 'rules', component: RulesComponent }, 
  { path: '**', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CemeteryLayoutComponent, StatsComponent, HomeComponent, ContactComponent]
