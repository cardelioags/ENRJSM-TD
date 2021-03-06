import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TutoriasService {
    private url = '/api/tutorias';
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
        tutorados(id): Observable<any[]>{
            return this.http.get(this.url+`/tutor/${id}`)
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
        guardarPlan(plan): Observable<any[]>{
            return this.http.put(this.url+'/guardar/plan', plan, {headers:this.headers})
            .map(res => res.json())
        }
        guardarAccion(accion): Observable<any[]>{
            return this.http.put(this.url+'/guardar/accion', accion, {headers:this.headers})
            .map(res => res.json())
        }
        eliminaAccion(tutoria,plan,accion): Observable<any[]>{
            return this.http.delete(this.url+`/eliminar/${tutoria}/${plan}/${accion}`)
            .map(res => res.json())
        }

}