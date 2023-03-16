import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { CustomMatChipComponent } from './components/custom-mat-chip/custom-mat-chip.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomMatChipComponent
  ],
  imports: [
    BrowserModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
