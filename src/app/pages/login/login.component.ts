import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

import { LoginService } from 'src/app/globals/services/login.service';
import { AuthService } from 'src/app/globals/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials:Credentials = {
    email: '',
    password: ''
  };

  error:boolean;

  constructor(
    private loginService:LoginService,
    private snackBar:MatSnackBar,
    private authService:AuthService,
    private router:Router
) { }

  ngOnInit(): void {
  }

  login() {
    console.log('Inciar sesion: ', this.credentials);
    this.loginService.login(this.credentials).then(response => {
      console.log('Login response: ', response);
      this.authService.save(response.token);
      this.router.navigate(['/']);
      this.error = false;
    }).catch(err => {
      console.log('Login error: ', err);
      this.error = true;
      this.showSnack('Credenciales incorrectas');
    });
  }

  showSnack(message) {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

}

interface Credentials {
  email:string;
  password:string;
}
