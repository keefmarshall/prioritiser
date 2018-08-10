import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdesignModule } from './mdesign/mdesign.module';
import { PsliderComponent } from './pslider/pslider.component';
import { PointsService } from './services/points.service';

@NgModule({
  declarations: [
    AppComponent,
    PsliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
