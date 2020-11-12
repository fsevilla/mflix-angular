import { Injectable } from '@angular/core';

import { CrudService } from './crud.service';
import { Movie } from '../types/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService extends CrudService {

  movies:Array<Movie> = [
    { title: 'Pelicula 1', description: 'lorem', duration: 100 },
    { title: 'Pelicula 2', description: 'lorem ipsum', duration: 100 },
    { title: 'Pelicula 3', description: 'lorem ipsum', duration: 100 },
    { title: 'Pelicula 4', description: 'lorem ipsum', duration: 100 }
  ];

  protected endpoint:string = 'albums'; // movies

  getAllFake():Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movies);
      }, 3000);
    });
  }

}
