import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public pokemons: Pokemon[];
    loaded: number;
    total: number;

    filteredItems: any;
    items: any;

    constructor(
        public dataService: HomeService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.getData();
        // this.pokemons = this.dataService.pokemons;
        // this.loaded = this.dataService.loaded;
        // this.total = this.dataService.total;
    }

    getData() {
        this.dataService.checkLocal()
            // local check
            .then((data){
                this.pokemons = this.dataService.pokemons;
                return this.dataService.setData();
            })
            .then((data){
                // this.pokemons = data;
            })
    }

    selectPokemon(id: number) {
        this.router.navigate(['pokemon', id]);
    }
}
