import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupFraisPage } from './popup-frais.page';

const routes: Routes = [
  {
    path: '',
    component: PopupFraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupFraisPageRoutingModule {}
