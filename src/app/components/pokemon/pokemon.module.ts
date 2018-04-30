import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { MaterialModule } from '../../module/angular_material.module';

@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MaterialModule
  ],
  declarations: [PokemonComponent]
})
export class PokemonModule { }
