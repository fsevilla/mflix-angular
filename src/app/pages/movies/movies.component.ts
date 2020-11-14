import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/globals/types/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  selectedMovie:Movie = {
    title: "",
    plot: "",
    imdb: { rating:0, votes: 0, id: 0 },
    rated: "",
    awards: {wins:0, nominations:0, text: ""}
  };
  
  constructor() {}

  ngOnInit() { }

  handleMovieSelected(movie:Movie) {
    console.log('La pelicula selecciona en el hijo fue: ', movie);
    this.selectedMovie = movie;
  }

}