import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareTransactionPage } from './share-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: ShareTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareTransactionPageRoutingModule {}
