import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'favorite', loadChildren: ()=> import('./pages/favorites/favorite.module').then(m => m.FavoriteModule)},
  { path: 'details/:title', loadChildren: ()=> import('./pages/details/details.module').then(m => m.DetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
