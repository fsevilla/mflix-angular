import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected endpoint:string = '';

  constructor(private httpClient:HttpClient) { }

  getAll():Promise<any> {
    const url = environment.apiBasePath + environment.apiUrl + this.endpoint;
    return this.httpClient.get(url).toPromise();
  }

  getById(id:number):Promise<any> {
    const url = environment.apiBasePath + environment.apiUrl + this.endpoint + '/' + id;
    return this.httpClient.get(url).toPromise();
  }
}
