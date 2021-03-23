import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Client } from '../entity/Client';
import { Transaction } from '../entity/Transaction';
import { DepotService } from '../Services/depot.service';
import {Storage} from '@ionic/storage';
import Swal from 'sweetalert2';
import { ModalController } from '@ionic/angular';
import { DepotPopoverPage } from '../depot-popover/depot-popover.page';
@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {

  constructor(private modalCtrl:ModalController,private service:DepotService,private storage:Storage) 
  {}
compte:any;  
helper=new JwtHelperService();
numCIN:string
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

  hide=false;
  show=true;
  code="";
  clientRetrait:Client={
    nomComplet:"",
    numCIN:"",
    telephone:""
  };
  clientDepot:Client={
    nomComplet:"",
    numCIN:"",
    telephone:""
  };
  transaction:Transaction=
  {
    montant:0,
    clientRetrait:this.clientRetrait,
    clientDepot:this.clientDepot,
    compteDepot:
    {
      id:1
    }
  };
  
  
  ShowAndHide(data:any)
  {
    this.hide=data==1?false:true;   
  }

  GetTransaction()
  {
    if (this.code.length==11)
    {
      
      this.service.GetTRansactionByCode(this.code).subscribe(
        (response:Transaction)=>
        {
          console.log(response)
          if (response['hydra:member'][0]['isRetired']===false)
          {
            this.show=false;
            this.transaction=response["hydra:member"][0];
            this.clientDepot=this.transaction['clientDepot'];
            this.clientRetrait=this.transaction['clientRetrait']
            console.log(this.transaction);
          }
          else
          alert('Code Déja utilisé');
      },
      
      )
    }

    else
    {
      this.show=true
    }    
    
  }

  async Retrait(){
    const modal = await this.modalCtrl.create({
      component: DepotPopoverPage,
      componentProps: {
        'numCIN':this.numCIN,
        'clientdepot':this.clientDepot,
        'clientretrait':this.clientRetrait
      },
      //cssClass:"mainAlert"
    });
    modal.style.cssText = '--width: 300px;  --height:470px;margin:auto;--border-radius:20px;'
    return await modal.present();
  }
    // MakeRetrait(numCIN:string)
    // {
    //   var  data={
    //     "compteRetrait":
    //     {
    //         "id":this.compte['id']
    //     },
        
    //     "clientRetrait":
    //     {
    //         "numCIN":numCIN
    //     }
    // }
    // this.service.Retrait(data,this.transaction['id']).subscribe(
    //   (response:any)=>
    //     {
    //       Swal.fire({
    //         title: 'Connexion reussie',
    //         text: 'Connexion reussie',
    //         icon: 'success',
            
    //       })

    //       console.log(response)
    //     },
    //     (error:any)=>
    //     {
    //       Swal.fire({
    //         title: 'Connexion echec',
    //         text: 'Connexion echec',
    //         icon: 'error',
    //       })
    //   }
    // )
    // }

}
