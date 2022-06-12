import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LasfloresPageRoutingModule } from './lasflores-routing.module';

import { LasfloresPage } from './lasflores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LasfloresPageRoutingModule
  ],
  declarations: [LasfloresPage]
})
export class LasfloresPageModule {}
