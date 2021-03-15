import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { StudentsModule } from './students/students.module';
import { CommonComponentsModule } from 'common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CommonComponentsModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
