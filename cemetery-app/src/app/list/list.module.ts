import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [
    ListComponent,
    PeopleTableComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    CommonComponentsModule
  ]
})
export class ListModule { }
