import { Injectable } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AlumnosService {
    private url = 'http://localhost:3000/api/alumnos';

    constructor(private http: Http){}

    todos(): Observable<any[]>{
        return this.http.get(this.url)
        .map( res => res.json() );
    }

}

