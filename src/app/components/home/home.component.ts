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

    nameInput: string = '';

    filteredItems: any;
    items: any;

    constructor(
        public dataService: HomeService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.getData();
    }

    getData() {
        this.dataService.checkLocal()
            // local check
            .then((data) => {
                this.pokemons = this.dataService.pokemons;
                return this.dataService.setData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    selectPokemon(id: number) {
        this.router.navigate(['pokemon', id]);
    }

}
