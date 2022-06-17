import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismoPageRoutingModule } from './turismo-routing.module';

import { TurismoPage } from './turismo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismoPageRoutingModule,
    PipesModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [TurismoPage]
})
export class TurismoPageModule {}
