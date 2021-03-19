import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupFraisPageRoutingModule } from './popup-frais-routing.module';

import { PopupFraisPage } from './popup-frais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupFraisPageRoutingModule
  ],
  declarations: [PopupFraisPage]
})
export class PopupFraisPageModule {}
