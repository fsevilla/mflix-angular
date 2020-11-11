import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies:Array<Movie> = [
    { title: 'Pelicula 1', description: 'lorem', duration: 100 },
    { title: 'Pelicula 2', description: 'lorem ipsum', duration: 100 },
    { title: 'Pelicula 3', description: 'lorem ipsum', duration: 100 },
    { title: 'Pelicula 4', description: 'lorem ipsum', duration: 100 }
  ];

  constructor(private httpClient:HttpClient) { }

  getAllFake():Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movies);
      }, 3000);
    });
  }

  getAll():Promise<any> {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    return this.httpClient.get(url).toPromise();
  }

  getById(id:number):Promise<any> {
    const url = 'https://jsonplaceholder.typicode.com/albums/'+id;
    return this.httpClient.get(url).toPromise();
  }
}
