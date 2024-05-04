import { Component } from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private logservice:LoginServiceService,private router:Router) {
    logservice.isLoggedIn =false
    this.router.navigate(['/login']);
  }
}
