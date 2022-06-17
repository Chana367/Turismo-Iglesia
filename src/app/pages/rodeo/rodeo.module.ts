import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodeoPageRoutingModule } from './rodeo-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RodeoPage } from './rodeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodeoPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [RodeoPage]
})
export class RodeoPageModule {}
