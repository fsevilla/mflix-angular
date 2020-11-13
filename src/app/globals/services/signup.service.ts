import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }

  signup(user):Promise<any> {
    const url = `${environment.apiBasePath}${environment.apiUrl}signup`;
    return this.httpClient.post(url, user).toPromise();
  }
}
