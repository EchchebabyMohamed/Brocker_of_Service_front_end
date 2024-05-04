import { Component } from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent {
  constructor(public loginservice: LoginServiceService) {
  }
}
