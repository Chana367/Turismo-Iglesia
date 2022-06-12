import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TudcumPage } from './tudcum.page';

const routes: Routes = [
  {
    path: '',
    component: TudcumPage
  },
  {
    path: 'hospedaje',
    loadChildren: () => import('./hospedaje/hospedaje.module').then( m => m.HospedajePageModule)
  },
  {
    path: 'turismo',
    loadChildren: () => import('./turismo/turismo.module').then( m => m.TurismoPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TudcumPageRoutingModule {}
