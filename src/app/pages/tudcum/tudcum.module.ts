import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TudcumPageRoutingModule } from './tudcum-routing.module';

import { TudcumPage } from './tudcum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TudcumPageRoutingModule
  ],
  declarations: [TudcumPage]
})
export class TudcumPageModule {}
