import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class PlanesEstService {
    constructor(private http: Http){  }
    
    private url = '/api/planes-est';
    private headers = new Headers({'Content-Type':'application/json'});

    todos(){
        return this.http.get(this.url)
        .map(res => res.json());
    }
}