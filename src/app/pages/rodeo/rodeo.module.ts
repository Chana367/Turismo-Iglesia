import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodeoPageRoutingModule } from './rodeo-routing.module';

import { RodeoPage } from './rodeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodeoPageRoutingModule
  ],
  declarations: [RodeoPage]
})
export class RodeoPageModule {}
