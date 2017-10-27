import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class RolesService {
    private url = '/api/roles';
    private headers = new Headers({'Content-Type':'application/json'});

        constructor(private http: Http){}
        rol(id): Observable<any[]>{
            return this.http.get(this.url + `/${id}`)
            .map(res => res.json());
        }
        todos(): Observable<any[]>{
            return this.http.get(this.url)
            .map( res => res.json());
        }
        nuevo(rol): Observable<any[]>{
            return this.http.post(this.url, rol, {headers:this.headers})
            .map( res => res.json());
        }
        editar(rol): Observable<any>{
            return this.http.put(this.url, rol, {headers: this.headers})
            .map(res => res.json());
        }
}