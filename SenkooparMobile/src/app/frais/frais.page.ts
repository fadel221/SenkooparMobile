import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupFraisPage } from '../popup-frais/popup-frais.page';
import { DepotService } from '../Services/depot.service';

@Component({
  selector: 'app-frais',
  templateUrl: './frais.page.html',
  styleUrls: ['./frais.page.scss'],
})
export class FraisPage implements OnInit {

  frais:any;
  montant:number;
  type:string;
  hide=true;
  constructor(private service:DepotService,public modalCtrl: ModalController) { }

  ngOnInit() {
  
  }
  async Success(){
    const modal = await this.modalCtrl.create({
      component: PopupFraisPage,
      componentProps: {
        'montant':this.montant,
        'frais':this.frais,
        'type':this.type
      },
      
    });
    modal.style.cssText = '--width: 279px;  --height:232px;--border-radius:10px;--margin:auto'
    return await modal.present();
  }


  hidden()
  {
    this.hide=true
  }

  CalculeFrais(data:any)
  {
    this.montant=data['montant'];
    this.type=data['type']
    this.service.GetFrais(data['montant']).subscribe(
      (response:any)=>
      {
        this.frais=this.service.CalculFrais(this.type,response)+"F";
        this.hide=false
        this.Success()
      }
    )
  }

}
