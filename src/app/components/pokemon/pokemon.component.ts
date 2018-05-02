import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home/home.service';
import { Pokemon } from '../../models/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
    public pokemon: Pokemon;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public service: HomeService
    ) {
        this.route.params.subscribe(params => {
            console.log(params);
            this.getOne(params.id);
        });

    }

    getOne(id){
      if (this.service.pokemons[id-1]) {
        this.pokemon = this.service.pokemons[id-1];
      }

    }

}
