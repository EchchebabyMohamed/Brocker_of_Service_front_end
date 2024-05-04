import { NgModule } from '@angular/core';
import {CanActivate, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ServicesComponent} from "./components/services/services.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./auth-guard.guard";
import {LogoutComponent} from "./components/logout/logout.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'services', component: ServicesComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
