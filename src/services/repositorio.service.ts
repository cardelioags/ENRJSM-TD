import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class RepositorioService {
    private url = '/api/repositorio';
    private headers = new Headers({'Content-Type':'application/json'});

        constructor(private http: Http){}
        archivos(): Observable<any[]>{
            return this.http.get(this.url)
            .map(res => res.json());
        }
}