import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

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

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    const enteredUser = this.loginForm.value as User;

    if (enteredUser.username === 'Jhon_Doe' && enteredUser.password === 'password') {
      console.log('Login bem-sucedido!');
    } else {
      console.log('Credenciais inválidas. Tente novamente.');
    }
  }
}
