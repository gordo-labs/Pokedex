import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApiService } from '../api/api.service';

export let pokemons = [];

@Injectable()
export class HomeService {
    // pokemons: Pokemon[];

    constructor(
        public api: ApiService,
    ) {}

    getData() {
        return this.api.get('')
            .subscribe(res => {
                console.log(res);
                let pokeUrls = res.results;
                pokeUrls.reduce((promiseChain, item) => {
                    return promiseChain.then(() => new Promise((resolve) => {
                        this.asyncFunction(item, resolve);
                    }));
                }, Promise.resolve())
                .then(() =>{
                    console.log('done');
                });
            });

    }

    asyncFunction(item, callback) {
        let pokenumbers = item.url.split('/'),
        pokemonNumber = pokenumbers[pokenumbers.length-2];

        // check if it is in local stored

        this.api.get(pokemonNumber)
            .subscribe(pokemonData => {
                console.log(pokemonData);
                pokemons.push(pokemonData);
                callback();
            })
    }

}