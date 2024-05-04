import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbareComponent } from './components/navbare/navbare.component';
import { WorkersComponent } from './components/workers/workers.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbareComponent,
    WorkersComponent,
    ServicesComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
