import { Component } from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formsGroup!:FormGroup;
  constructor(private login:LoginServiceService,private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.formsGroup = this.fb.group({
      username: ['',Validators.required],
      password:['',Validators.required]
    })

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton) {
      signUpButton.addEventListener('click', () => {
        if (container) {
          container.classList.add('right-panel-active');
        }
      });
    }

    if (signInButton) {
      signInButton.addEventListener('click', () => {
        if (container) {
          container.classList.remove('right-panel-active');
        }
      });
    }
  }

  loginfunction() {
    // @ts-ignore
    this.login.getjwt(this.formsGroup.get('username').value,this.formsGroup.get('password').value).subscribe({
      next : rs => {
        console.log(rs)
      }
    })

  }
}
