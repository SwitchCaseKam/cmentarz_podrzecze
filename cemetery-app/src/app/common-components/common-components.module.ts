import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from '../components/header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    // HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // HeaderComponent,
    SpinnerComponent
  ]
})
export class CommonComponentsModule { }
