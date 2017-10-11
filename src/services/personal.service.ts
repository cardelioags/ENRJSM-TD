import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class PersonalService {
    private url = 'http://localhost:3000/api/personal';
    private headers = new Headers({'Content-Type':'application/json'});

        constructor(private http: Http){}
        personal(id): Observable<any[]>{
            return this.http.get(this.url + `/${id}`)
            .map(res => res.json());
        }
        todos(): Observable<any[]>{
            return this.http.get(this.url)
            .map( res => res.json());
        }
        nuevo(personal): Observable<any[]>{
            return this.http.post(this.url, personal, {headers:this.headers})
            .map( res => res.json());
        }
}