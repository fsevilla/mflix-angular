import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(credentials):Promise<any> {
    const url = environment.apiBasePath + environment.apiUrl + 'auth';
    return this.httpClient.post(url, credentials).toPromise();
  }
}