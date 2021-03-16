import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-successpopover',
  templateUrl: './successpopover.page.html',
  styleUrls: ['./successpopover.page.scss'],
})
export class SuccesspopoverPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  @Input()transaction

  ngOnInit() {
    console.log(this.transaction)
  }

}
