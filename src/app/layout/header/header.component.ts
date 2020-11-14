import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/globals/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.loginStatus.subscribe(status => {
      this.loggedIn = status;
    });
  }

  logout() {
    this.authService.clear();
    this.router.navigate(['/login']);
  }

}
