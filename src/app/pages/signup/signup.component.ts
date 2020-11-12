import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:any = {};
  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

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
      console.log('Usuario', this.user);
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



}
