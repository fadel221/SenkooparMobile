import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import {Storage} from '@ionic/storage';
import Swal from 'sweetalert2';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authservice:AuthService,private storage:Storage,private router:Router) {}
   helper = new JwtHelperService();

//const decodedToken = helper.decodeToken(myRawToken);

// Other functions
//const expirationDate = helper.getTokenExpirationDate(myRawToken);
c//onst isExpired = helper.isTokenExpired(myRawToken);

  login(form:NgForm)
  {
    
    console.log(form.value)
    this.authservice.GetToken(form.value).subscribe(
      (response:any)=>
      {
        this.storage.set('token',response['token'])
        
        this.storage.get('token').then((val)=>
        {
          console.log(val);
        })
        
        this.router.navigate(['accueil'])
      },
      (error:any)=>
      {
        Swal.fire({
          title: 'Connexion echec',
          text: 'Connexion echec',
          icon: 'error',
        })
        
      }
    )
  }

}
