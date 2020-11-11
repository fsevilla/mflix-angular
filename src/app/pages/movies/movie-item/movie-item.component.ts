import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/globals/types/movie';
import { MovieService } from 'src/app/globals/services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie:Movie = {
    title: "",
    description: "",
    duration: 0
  };

  movieId:number;

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService) {
    this.activatedRoute.params.subscribe(urlParams => {
      this.movieId = +urlParams.movieId;
    });
  }

  ngOnInit(): void {
    if(this.movieId) {
      console.log('Pedir el detalle desde la API');
      this.movieService.getById(this.movieId)
      .then(response => {
        this.movie = response;
      })
      .catch(err => {
        console.error('Error al traer la pelicula', err);
      });
    }
  }
}
