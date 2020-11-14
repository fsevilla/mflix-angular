import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/globals/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected endpoint:string = '';

  constructor(private httpClient:HttpClient, private authService:AuthService) { }


  getAll():Promise<any> {

    const token = this.authService.get();
    const headers:HttpHeaders = new HttpHeaders({
      Authorization: token
    });

    const url = environment.apiBasePath + environment.apiUrl + this.endpoint;
    return this.httpClient.get(url, {
      headers: headers
    }).toPromise();
  }

  getById(id:number):Promise<any> {

    const token = this.authService.get();
    const headers:HttpHeaders = new HttpHeaders({
      Authorization: token
    });

    const url = environment.apiBasePath + environment.apiUrl + this.endpoint + '/' + id;
    return this.httpClient.get(url, {
      headers: headers
    }).toPromise();
  }
}
