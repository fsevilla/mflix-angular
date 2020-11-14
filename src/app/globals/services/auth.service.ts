import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus:BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedIn());

  constructor() {}

  save(token:string) {
    sessionStorage.setItem('token', token);
    this.loginStatus.next(true);
  }

  get() {
    return sessionStorage.getItem('token');
  }

  clear() {
    sessionStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('token');
  }
}
