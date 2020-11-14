import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  save(token:string) {
    sessionStorage.setItem('token', token);
  }

  get() {
    return sessionStorage.getItem('token');
  }

  clear() {
    sessionStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('token');
  }
}
