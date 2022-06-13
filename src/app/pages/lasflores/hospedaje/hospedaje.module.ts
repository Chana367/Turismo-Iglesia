import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospedajePageRoutingModule } from './hospedaje-routing.module';

import { HospedajePage } from './hospedaje.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospedajePageRoutingModule, 
    PipesModule
  ],
  declarations: [HospedajePage]
})
export class HospedajePageModule {}
