import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { DepotService } from '../Services/depot.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private storage:Storage,private service:DepotService) { }
  compte=""
  helper=new JwtHelperService()
  ngOnInit() {
    this.storage.get('token').then((val)=>{
      var username=this.helper.decodeToken(val)['username']
      this.service.GetUserCompte(username).subscribe(
        (response:any)=>{
          this.compte=response;
          console.log(response);
        })
    })
  }

  list=[
    {
      name:'Dépot',
      icone:'return-up-back',
      url:'/depot'
    },
    {
      name:'Retrait',
      icone:'return-up-back',
      url:'/retrait'
    },
    {
      name:'Mes Transactions',
      icone:'sync', 
      url:'transaction'
    },
    {
      name:'Toutes les Transactions',
      icone:'sync-circle',
      url:'transactions'
    },
    {
      name:'Mes commissions',
      icone:'reorder-three-outline',
      url:'commissions'
    },
    {
      name:'Calculateur de Frais',
      icone:'calculator-outline',
      url:'/frais',
    },
    {
      name:'Déconnexion',
      icone:'log-out-outline',
      url:''
    }
  ]

}
