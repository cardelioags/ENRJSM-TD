import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AlumnosService {
    private url = 'http://localhost:3000/api/alumnos';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http){}
    alumno(id): Observable<any[]> {
        return this.http.get(this.url + `/${id}`)
            .map(res => res.json());
    }
    todos(): Observable<any[]>{
        return this.http.get(this.url)
        .map( res => res.json() );
    }
    nuevo(alumno): Observable<any[]> {
        return this.http.post(this.url, alumno, { headers: this.headers })
            .map(res => res.json());
    }
    calificaciones(matricula,calificaciones){
        return this.http.put(this.url+"/calificaciones", {matricula:matricula, calificaciones:calificaciones}, { headers: this.headers })
        .map(res => res.json());
    }

}