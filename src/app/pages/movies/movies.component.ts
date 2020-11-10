import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';

import { Movie } from 'src/app/globals/types/movie';
import { MovieService } from 'src/app/globals/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit, OnChanges {

  movie:Movie = {
    title: 'Algo',
    description: 'lorem',
    duration: 60
  };

  movies:Array<Movie>;

  constructor(private movieService:MovieService) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('Componente listo');
    this.movieService.getAll().then(datos => {
      this.movies = datos.slice();
    });
  }

  ngAfterViewInit() {
    console.log('HTML listo!');
  }

  ngOnChanges(changes) {
    console.log('Changes: ', changes);
  }

  addMovie() {
  }

}