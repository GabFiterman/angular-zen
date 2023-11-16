// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    const existingUserString = localStorage.getItem('user');

    if (!existingUserString) {
      const newUser: User = {
        username: 'Jhon_Doe',
        password: 'password',
      };

      const newUserString = JSON.stringify(newUser);
      localStorage.setItem('user', newUserString);
    }
  }

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
      this.authService.login();
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }

  onLogout() {
    this.loginForm.reset();
    this.authService.logout();
  }
}
