import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PereComponent } from './pere/pere.component';
import { Fils1Component } from './fils1/fils1.component';
import { Fils2Component } from './fils2/fils2.component';

@NgModule({
  declarations: [
    AppComponent,
    PereComponent,
    Fils1Component,
    Fils2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
