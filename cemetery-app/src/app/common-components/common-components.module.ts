import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from '../components/header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    // HeaderComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // HeaderComponent,
    SpinnerComponent,
    FooterComponent
  ]
})
export class CommonComponentsModule { }
