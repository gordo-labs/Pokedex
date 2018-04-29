import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/components/home/home.module#HomeModule'
  },
  {
    path: 'pokemon',
    loadChildren: 'app/components/pokemon/pokemon.module#PokemonModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
