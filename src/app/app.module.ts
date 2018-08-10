import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdesignModule } from './mdesign/mdesign.module';
import { PsliderComponent } from './pslider/pslider.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PbarComponent } from './pbar/pbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PsliderComponent,
    PbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
