import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbareComponent } from './components/navbare/navbare.component';
import { WorkersComponent } from './components/workers/workers.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbareComponent,
    WorkersComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
