import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Movie } from 'src/app/globals/types/movie';
import { MovieService } from 'src/app/globals/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies:Array<Movie>;
  filteredMovies:Array<Movie>;

  query:string = "";

  @Output() onMovieSelected:EventEmitter<Movie> = new EventEmitter();

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getAll().then(datos => {
      this.movies = datos;
      this.filteredMovies = datos;
    }).catch(err => {
      console.log('Error: ', err);
    });
  }

  selectMovie(item) {
    console.log('Select Movie', item);
    this.onMovieSelected.emit(item);
  }

  filter() {
    this.filteredMovies = this.movies.filter(movie => {
      return movie.title.includes(this.query);
    })
  }

  validateEnter(e) {
    if(e.key === 'Enter') {
      this.filter();
    }
  }

}