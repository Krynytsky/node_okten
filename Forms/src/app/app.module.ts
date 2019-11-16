import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgReactiveFormComponent } from './ng-reactive-form/ng-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgReactiveFormComponent
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
