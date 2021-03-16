import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';
import { DepotService } from '../Services/depot.service';
import {Storage} from '@ionic/storage';
import { DepotPopoverPage } from '../depot-popover/depot-popover.page';
import { ModalController, PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
  
hide=true;
ClientDepot:FormGroup
ClientRetrait:FormGroup
constructor(private fb:FormBuilder,private service:DepotService,private storage:Storage,public modalCtrl: ModalController) 
  {}

compte:any;  
helper=new JwtHelperService();
frais:any
montantForm:any
async Depotpopover(){
  const modal = await this.modalCtrl.create({
    component: DepotPopoverPage,
    componentProps: {
      'clientdepot':this.ClientDepot.value,
      'clientretrait':this.ClientRetrait.value,
      'montant':this.montantForm.value
    },
    //cssClass:"mainAlert"
  });
  modal.style.cssText = '--width: 300px;  --height:470px;margin:auto;--border-radius:20px;'
  return await modal.present();
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

    this.ClientDepot=this.fb.group(
      {
            nomComplet:['', Validators.required],
            numCIN:['', Validators.required,[Validators.minLength(13),Validators.maxLength(13)]],
            telephone:['', Validators.required,[Validators.minLength(9),Validators.minLength(9),Validators.pattern("/^(33|76|77|78|75)[0-9]*$/")]],   
        })

        this.ClientRetrait=this.fb.group(
          {
                nomComplet:['', Validators.required],
                telephone:['', Validators.required,[Validators.minLength(9),Validators.minLength(9),Validators.pattern("/^(33|76|77|78|75)[0-9]*$/")]],
                
          })

          this.montantForm=this.fb.group(
            {
                  montant:['', Validators.required,[Validators.minLength(9),Validators.minLength(9),Validators.pattern("/[0-9]*$/")]],
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
      this.service.GetFrais(this.montantForm.value).subscribe(
        (response:any)=>
        {
          console.log(response);
          this.frais=response+"F";
          this.hide=false
        }
      )
    }
    
  }


