import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './number.directive';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
