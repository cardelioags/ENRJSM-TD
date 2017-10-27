import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {
    private url = '/api/usuarios';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }
    usuario(id): Observable<any[]> {
        return this.http.get(this.url + `/${id}`)
            .map(res => res.json());
    }
    check(usr, pass): Observable<any> {
        return this.http.post(this.url + "/login", { usr: usr, pass: pass }, { headers: this.headers })
            .map(res => res.json())
    }
    todos(): Observable<any[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }
    nuevo(usuario): Observable<any[]> {
        return this.http.post(this.url, usuario, { headers: this.headers })
            .map(res => res.json());
    }
    newpass(pass, id): Observable<any> {
        return this.http.put(this.url + `/${id}/newpass`, {pass:pass}, { headers: this.headers })
            .map(res => res.json());
    }
}