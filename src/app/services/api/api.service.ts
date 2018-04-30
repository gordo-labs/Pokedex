import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    url: string = "http://pokeapi.salestock.net/api/v2/pokemon"
    // url: string = "https://pokeapi.co/api/v2/pokemon"

    constructor(public http: HttpClient) {}

    get(endpoint: string, params ? : any, reqOpts ? : any) {
        console.log('API GET => '+ JSON.stringify(endpoint) + ' + ' + JSON.stringify(params));
        if (!reqOpts) {
            reqOpts = {
                params: new HttpParams()
            };
        }
        
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        console.log(this.url + '/' + endpoint);
        return this.http.get(this.url + '/' + endpoint);
    }
    
    post(endpoint: string, body ?: any, reqOpts ? : any) {
        console.log('API POST => '+ JSON.stringify(endpoint) + ' ' + JSON.stringify(body));
        return this.http.post(this.url + '/' + endpoint, body);
    }
    
    put(endpoint: string, body ?: any, reqOpts ? : any) {
        console.log('API PUT => '+ endpoint + ' ' + body);
        return this.http.put(this.url + '/' + endpoint, body);
    }
    
    delete(endpoint: string, body ?, reqOpts ? : any) {
        console.log('API DELETE => '+ endpoint + ' ' + body);
        return this.http.delete(this.url + '/' + endpoint, body);
    }
    
    patch(endpoint: string, body ?: any, reqOpts ? : any) {
        console.log('API PATCH => '+ endpoint + ' ' + body);
        return this.http.patch(this.url + '/' + endpoint, body);
    }
}