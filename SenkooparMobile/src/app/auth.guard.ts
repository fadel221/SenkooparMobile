import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private con:AuthService,private router:Router){

  }

  canActivate (): boolean
  {
    if (this.con.loggedIn())
    {
      return true
    }
    this.router.navigate(["home"]);
    return false
  }
  
}
