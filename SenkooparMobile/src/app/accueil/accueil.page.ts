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
  hide=false;
  list:any
  ngOnInit() {
    this.storage.get('token').then((val)=>{
      var username=this.helper.decodeToken(val)['username']
      this.service.GetUserCompte(username).subscribe(
        (response:any)=>{
          this.compte=response;
          console.log(this.helper.decodeToken(val))
        if (this.helper.decodeToken(val)['roles'][0]!=='ROLE_Admin_systeme')
        {
          this.hide=true;
          console.log(this.hide);
        }

        this.list=[
          {
            name:'Dépot',
            icone:'return-up-back',
            hide:false,
            url:'/depot'
          },
          {
            name:'Retrait',
            icone:'return-up-back',
            hide:false,
            url:'/retrait'
          },
          {
            name:'Mes Transactions',
            icone:'sync', 
            hide:false,
            url:'/transaction'
          },
          {
            name:'Toutes les Transactions',
            icone:'sync-circle',
            hide:this.hide,
            url:'/transactions'
          },
          {
            name:'Mes commissions',
            icone:'reorder-three-outline',
            hide:this.hide,
            url:'/commissions'
          },
          {
            name:'Calculateur de Frais',
            icone:'calculator-outline',
            hide:this.hide,
            url:'/frais',
          },
          {
            name:'Déconnexion',
            icone:'log-out-outline',
            hide:false,
            url:'/home'
          }
        ]
          
        })
    })
    
  }

  

}
