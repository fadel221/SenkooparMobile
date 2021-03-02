import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authservice:AuthService) {}

  login(form:NgForm)
  {
    console.log(form.value)
    this.authservice.GetToken(form.value).subscribe(
      (response:any)=>
      {
        Swal.fire({
          title: 'Connexion reussie',
          text: 'Connexion reussie',
          icon: 'success',
          
        })
        console.log(response["token"]);
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
