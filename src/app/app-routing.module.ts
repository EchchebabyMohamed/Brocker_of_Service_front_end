import { NgModule } from '@angular/core';
import {CanActivate, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ServicesComponent} from "./components/services/services.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./auth-guard.guard";
import {ServiceDetailsComponent} from "./components/service-details/service-details.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
