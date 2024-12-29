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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {NgxPaginationModule} from "ngx-pagination";
@NgModule({
  declarations: [
    AppComponent,
    NavbareComponent,
    WorkersComponent,
    ServicesComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    ServiceDetailsComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SweetAlert2Module.forRoot(),
        FormsModule,
        NgxPaginationModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
