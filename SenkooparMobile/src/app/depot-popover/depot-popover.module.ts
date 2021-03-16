import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepotPopoverPageRoutingModule } from './depot-popover-routing.module';

import { DepotPopoverPage } from './depot-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepotPopoverPageRoutingModule
  ],
  declarations: [DepotPopoverPage]
})
export class DepotPopoverPageModule {}
