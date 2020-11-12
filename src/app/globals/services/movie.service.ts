import { Injectable } from '@angular/core';

import { CrudService } from './crud.service';


@Injectable({
  providedIn: 'root'
})
export class MovieService extends CrudService {

  protected endpoint:string = 'movies'; // movies

}
