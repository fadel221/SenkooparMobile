import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DepotService } from '../Services/depot.service';
import {Storage} from '@ionic/storage';
import { ModalController, PopoverController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SuccesspopoverPage } from '../successpopover/successpopover.page';
import { Transaction } from '../entity/Transaction';
@Component({
  selector: 'app-depot-popover',
  templateUrl: './depot-popover.page.html',
  styleUrls: ['./depot-popover.page.scss'],
})
export class DepotPopoverPage implements OnInit {

@Input ()clientdepot
@Input()clientretrait
@Input()montant
helper=new JwtHelperService()
compte:any
transaction:Transaction
constructor(private fb:FormBuilder,private service:DepotService,private storage:Storage,public modalCtrl: ModalController) 
{
}
  
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

async Success(){
  const modal = await this.modalCtrl.create({
    component: SuccesspopoverPage,
    componentProps: {
      'transaction':this.transaction
    },
    cssClass:"mainAlert"
  });
  modal.style.cssText = '--min-width: 300px; --max-width:315px;  --height:300px;'
  return await modal.present();
}



Depot()
{
  
  var data={
    "montant":Number(this.montant['montant']),
    "compteDepot":
  {
      "id":this.compte['id']
  },
  "clientDepot":this.clientdepot,
  "clientRetrait":this.clientretrait,
  }
  this.service.Depot(data).subscribe(
    (response:any)=>
    {
      this.transaction=response
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


  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
}


