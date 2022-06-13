import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'rodeo',
    loadChildren: () => import('./pages/rodeo/rodeo.module').then( m => m.RodeoPageModule)
  },
  {
    path: 'villaiglesia',
    loadChildren: () => import('./pages/villaiglesia/villaiglesia.module').then( m => m.VillaiglesiaPageModule)
  },
  {
    path: 'lasflores',
    loadChildren: () => import('./pages/lasflores/lasflores.module').then( m => m.LasfloresPageModule)
  },
  {
    path: 'bellavista',
    loadChildren: () => import('./pages/bellavista/bellavista.module').then( m => m.BellavistaPageModule)
  },
  {
    path: 'tudcum',
    loadChildren: () => import('./pages/tudcum/tudcum.module').then( m => m.TudcumPageModule)
  },
  {
    path: 'angualasto',
    loadChildren: () => import('./pages/angualasto/angualasto.module').then( m => m.AngualastoPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
