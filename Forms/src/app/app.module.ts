import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChildCounterComponent, NewCompComponent } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    ChildCounterComponent,
    NewCompComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
