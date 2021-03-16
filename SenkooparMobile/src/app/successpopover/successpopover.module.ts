import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesspopoverPageRoutingModule } from './successpopover-routing.module';

import { SuccesspopoverPage } from './successpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesspopoverPageRoutingModule
  ],
  declarations: [SuccesspopoverPage]
})
export class SuccesspopoverPageModule {}
