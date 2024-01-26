import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit(): void {
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

}
