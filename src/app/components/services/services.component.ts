import { Component } from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
constructor(private lob:LoginServiceService) {

  console.log(lob.isLoggedIn);
}
}
