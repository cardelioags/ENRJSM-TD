import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TutoresService {
    private url = '/api/tutores';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }
    tutor(id): Observable<any[]> {
        return this.http.get(this.url + `/${id}`)
            .map(res => res.json());
    }
    todos(): Observable<any[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }
    nuevo(id_persona): Observable<any[]> {
        return this.http.post(this.url, {_id: id_persona}, { headers: this.headers })
            .map(res => res.json());
    }
}