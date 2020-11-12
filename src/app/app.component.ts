import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = "Francisco";

  onRate(e) {
    console.log('rate change: ', e);
  }

  onStarClick(e) {
    console.log('rate change: ', e);
  }
}