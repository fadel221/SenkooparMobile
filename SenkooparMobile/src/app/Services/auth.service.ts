import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  link=environment.url+"login_check";

  constructor (private http: HttpClient,private _router:Router) 
  { 
    
  }

  GetToken(credentials: any)
  {
    return this.http.post(this.link,credentials)
  }
}
