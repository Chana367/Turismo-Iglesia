import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillaiglesiaPageRoutingModule } from './villaiglesia-routing.module';

import { VillaiglesiaPage } from './villaiglesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillaiglesiaPageRoutingModule
  ],
  declarations: [VillaiglesiaPage]
})
export class VillaiglesiaPageModule {}
