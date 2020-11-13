import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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

  @ViewChild(MatSort) sort: MatSort;

  query:string = "";

  @Output() onMovieSelected:EventEmitter<Movie> = new EventEmitter();

  displayedColumns: string[] = ['title', 'plot'];
  dataSource;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getAll().then(datos => {
      this.movies = datos;
      this.filteredMovies = datos;
      this.dataSource = new MatTableDataSource(datos);
      this.dataSource.sort = this.sort;
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