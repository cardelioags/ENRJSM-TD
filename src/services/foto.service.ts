import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class FotoService {

    private url = 'http://localhost:3000/api/subefoto';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http){}
    subirFoto(img, id): Observable<any[]> {
        return this.http.post(this.url, {img:img, id:id}, { headers: this.headers })
            .map(res => res.json());
    }
}
