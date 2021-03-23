import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareTransactionPageRoutingModule } from './share-transaction-routing.module';

import { ShareTransactionPage } from './share-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareTransactionPageRoutingModule
  ],
  declarations: [ShareTransactionPage]
})
export class ShareTransactionPageModule {}
