import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";
import {ServiceService} from "../../services/service.service";
import {Service} from "../../modeles/Service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service: Service[] = [];

  constructor(private lob: LoginServiceService, private serv: ServiceService) {
    console.log(lob.isLoggedIn);
  }

  ngOnInit(): void {
    console.log("hello from services")
    // @ts-ignore
    this.serv.getSetrvices().subscribe({
        // @ts-ignore
        next: (data: Service[]) => {
          this.service = data;
        },
        error: (err: any) => {
          console.error('Error fetching services', err);
        }
      }
    );
  }
}
