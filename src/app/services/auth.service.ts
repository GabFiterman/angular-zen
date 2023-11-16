import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['/gallery']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
