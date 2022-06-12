import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillaiglesiaPage } from './villaiglesia.page';

const routes: Routes = [
  {
    path: '',
    component: VillaiglesiaPage
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },
  {
    path: 'turismo',
    loadChildren: () => import('./turismo/turismo.module').then( m => m.TurismoPageModule)
  },
  {
    path: 'hospedaje',
    loadChildren: () => import('./hospedaje/hospedaje.module').then( m => m.HospedajePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillaiglesiaPageRoutingModule {}
