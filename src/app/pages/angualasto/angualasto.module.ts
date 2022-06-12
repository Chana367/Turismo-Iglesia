import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngualastoPageRoutingModule } from './angualasto-routing.module';

import { AngualastoPage } from './angualasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngualastoPageRoutingModule
  ],
  declarations: [AngualastoPage]
})
export class AngualastoPageModule {}
