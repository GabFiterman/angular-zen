import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  isLoggedIn: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    const existingUserString = localStorage.getItem('user');
    const isLoggedInString = localStorage.getItem('isLoggedIn');

    if (!existingUserString) {
      const newUser: User = {
        username: 'Jhon_Doe',
        password: 'password',
      };

      const newUserString = JSON.stringify(newUser);
      localStorage.setItem('user', newUserString);
    }

    if (isLoggedInString) {
      this.isLoggedIn = JSON.parse(isLoggedInString);
    }
  }

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    const enteredUser = this.loginForm.value as User;

    if (
      enteredUser.username === 'Jhon_Doe' &&
      enteredUser.password === 'password'
    ) {
      console.log('Login bem-sucedido!');
      this.isLoggedIn = true;

      localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
      this.router.navigate(['/gallery']);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }

  onLogout() {
    this.loginForm.reset();
    this.isLoggedIn = false;

    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
  }
}
