import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NasaListComponent } from './nasa-list/nasa-list.component';
import { NasaFormComponent } from './nasa-form/nasa-form.component';
import { routing } from './app.routing';
import { apiKey } from './api-keys'

@NgModule({
  declarations: [
    AppComponent,
    NasaListComponent,
    NasaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
