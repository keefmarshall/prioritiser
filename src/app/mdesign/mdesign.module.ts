import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatToolbarModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatSliderModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MdesignModule { }
