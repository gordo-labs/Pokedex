import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.params.subscribe(params => {
            console.log(params);
            // if (params['term']) {
            //     this.doSearch(params['term'])
            // }
        });
    }

    ngOnInit() {}

}