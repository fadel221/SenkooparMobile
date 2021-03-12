import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';
import { DepotService } from '../Services/depot.service';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
  
hide=true;
ClientDepot:FormGroup
ClientRetrait:FormGroup
constructor(private fb:FormBuilder,private service:DepotService,private storage:Storage) 
  {}

compte:any;  
helper=new JwtHelperService();
frais:any
montant:any
  ngOnInit() {

    this.storage.get('token').then((val)=>{
      var username=this.helper.decodeToken(val)['username']
      this.service.GetUserCompte(username).subscribe(
        (response:any)=>{
          this.compte=response;
          console.log(response);
        })
    })

    this.ClientDepot=this.fb.group(
      {
            nomComplet:['', Validators.required],
            numCIN:['', Validators.required],
            telephone:['', Validators.required],
            montant:['', Validators.required]    
        })

        this.ClientRetrait=this.fb.group(
          {
                nomComplet:['', Validators.required],
                telephone:['', Validators.required],
                
          })
}

  ShowAndHide(data:any)
  {
    this.hide=data==1?false:true;   
  }

  Depot()
  {
    
    var data={
      "compteDepot":
    {
        "id":this.compte['id']
    },
    "clientDepot":
    {
        "nomComplet":this.ClientDepot.get('nomComplet').value,
        "numCIN":this.ClientDepot.get('numCIN').value,
        "telephone":this.ClientDepot.get('telephone').value
    },
    "clientRetrait":
    {
        "nomComplet":this.ClientRetrait.get('nomComplet').value,
        "telephone":this.ClientRetrait.get('telephone').value
    },
    "montant":Number(this.ClientDepot.get('montant').value)
    }
    console.log(data);
    this.service.Depot(data).subscribe(
      (response:any)=>
      {
        Swal.fire({
          title: 'Depot reussie',
          text: 'Depot reussie',
          icon: 'success',
          
        })
        console.log(response)
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
    GetFrais()
    {
      this.service.GetFrais(this.montant).subscribe(
        (response:any)=>
        {
          console.log(response);
          this.frais=response+"F";
          this.hide=false
        }
      )
    }
    
  }


