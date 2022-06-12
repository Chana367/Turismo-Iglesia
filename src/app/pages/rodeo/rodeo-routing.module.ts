import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RodeoPage } from './rodeo.page';

const routes: Routes = [
  {
    path: '',
    component: RodeoPage
  },
  {
    path: 'turismo',
    loadChildren: () => import('./turismo/turismo.module').then( m => m.TurismoPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./restaurante/restaurante.module').then( m => m.RestaurantePageModule)
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
export class RodeoPageRoutingModule {}
