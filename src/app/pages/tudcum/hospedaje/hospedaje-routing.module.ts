import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospedajePage } from './hospedaje.page';

const routes: Routes = [
  {
    path: '',
    component: HospedajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospedajePageRoutingModule {}
