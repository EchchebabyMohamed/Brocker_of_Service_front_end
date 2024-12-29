import { Component } from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent {
  constructor(public loginservice: LoginServiceService,private  router:Router) {
  }

  funLogout() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Êtes-vous sûr de vouloir vous déconnecter?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Vous avez été déconnecté avec succès"
        });
        this.loginservice.isLoggedIn = false
        this.router.navigate(['/login']);
      }
    });

  }
}
