import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LasfloresPage } from './lasflores.page';

const routes: Routes = [
  {
    path: '',
    component: LasfloresPage
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
export class LasfloresPageRoutingModule {}
