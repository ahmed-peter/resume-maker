import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutesPaths } from './routes/app.routes';

import { AppComponent } from './app.component';


import { Template01Component } from './components/template-01/template-01.component';

@NgModule({
  declarations: [
    AppComponent,
    Template01Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutesPaths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
