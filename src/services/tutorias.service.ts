import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TutoriasService {
    private url = 'http://localhost:3000/api/tutorias';
    private headers = new Headers({'Content-Type':'application/json'});

        constructor(private http: Http){}
        tutoria(id): Observable<any[]>{
            return this.http.get(this.url + `/${id}`)
            .map(res => res.json());
        }
        todos(): Observable<any[]>{
            return this.http.get(this.url)
            .map( res => res.json());
        }
        nuevo(tutoria): Observable<any[]>{
            return this.http.post(this.url, tutoria, {headers:this.headers})
            .map( res => res.json());
        }
        asignar(data): Observable<any[]>{
            return this.http.put(this.url+'/asignar', data, {headers:this.headers})
            .map(res => res.json())
        }
}