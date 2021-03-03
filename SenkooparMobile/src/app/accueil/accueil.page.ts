import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list=[
    {
      name:'Dépot',
      icone:'',
      url:'/depot'
    },
    {
      name:'Retrait',
      icone:'',
      url:''
    },
    {
      name:'Mes Transactions',
      icone:'',
      url:''
    },
    {
      name:'Toutes les Transactions',
      icone:'',
      url:''
    },
    {
      name:'Mes commissions',
      icone:''
    },
    {
      name:'Calculateur de Frais',
      icone:'',
      url:'',
      
    },
    {
      name:'Déconnexion',
      icone:'',
      url:''
    }
  ]

}
