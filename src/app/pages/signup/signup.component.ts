import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { SignupService } from 'src/app/globals/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:any = {};
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private signupService:SignupService, private router:Router, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: this.passwordsMatch
    });
  }

  signup(e) {
    console.log('Form: ', this.form);
    if(this.form.valid) {
      const user = this.form.getRawValue();
      this.signupService.signup(user).then(response => {
        this.showSnack('El usuario se creo correctamente');
        this.router.navigate(['/login']);
      }).catch(err => {
        this.showSnack('El usuario esta duplicado');
      })
    } else {
      console.log('Faltan datos!')
    }
  }

  passwordsMatch(form) {
    const { password, confirm } = form.getRawValue();
    
    if(password === confirm) {
      return null;
    } else {
      return { mismatch: true};
    }
    
  }

  showSnack(message) {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end'
    });
  }



}
