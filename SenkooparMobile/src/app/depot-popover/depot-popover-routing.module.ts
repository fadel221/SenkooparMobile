import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepotPopoverPage } from './depot-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DepotPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotPopoverPageRoutingModule {}
