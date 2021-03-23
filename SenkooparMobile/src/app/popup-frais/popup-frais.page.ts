import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup-frais',
  templateUrl: './popup-frais.page.html',
  styleUrls: ['./popup-frais.page.scss'],
})
export class PopupFraisPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  @Input()montant
  @Input()type
  @Input()frais
  
  ngOnInit() {
  }

  dismiss() {  
    this.modalCtrl.dismiss();  
  }

  

}
