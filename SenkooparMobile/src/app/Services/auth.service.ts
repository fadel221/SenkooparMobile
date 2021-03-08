import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import {Storage} from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link=environment.url+"login_check";
  token=""
  constructor (private http: HttpClient,private _router:Router,private storage:Storage) 
  { 
    
  }

  GetToken(credentials: any)
  {
    return this.http.post(this.link,credentials)
  }

  loggedIn()
  {
    this.storage.get('token').then((val)=>{
          this.token=val;
    });
    return !!this.token
  }
}
