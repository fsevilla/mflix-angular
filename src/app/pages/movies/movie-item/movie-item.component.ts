import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';

import { Movie } from 'src/app/globals/types/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() movie:Movie;

  constructor() { }

  ngOnInit(): void {
    console.log('On init');
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngOnChanges(changes) {
    console.log('Movie item change: ', changes);
  }

}
