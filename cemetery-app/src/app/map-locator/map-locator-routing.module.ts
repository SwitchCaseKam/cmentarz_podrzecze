import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapLocatorComponent } from './map-locator.component';

const routes: Routes = [{ path: '', component: MapLocatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapLocatorRoutingModule { }
