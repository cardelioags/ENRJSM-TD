import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { UsuariosService } from "./usuarios.service";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService {
  constructor(private _usuarios: UsuariosService, private _http: Http) { }
  
  public usuario: any;
  jwt: JwtHelper = new JwtHelper();

  private subLogged: Subject<any> = new Subject<any>();
  public pubLogged: Observable<any> = this.subLogged.asObservable()
  
  login(usr, pass) {
    this._http.post('/api/login', { usr: usr, pass: pass }, { headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map(res => res.json())
      .subscribe((res:any) => {
        if(res.token && res.estado){
          sessionStorage.setItem('token',res.token);
          this.usuario = this.jwt.decodeToken(res.token);
          this.subLogged.next(true);
        }
      })
  }
  loggedIn(): boolean {
    return tokenNotExpired();
  }
  logout() {
    sessionStorage.clear();
  }
  getUsr() {
    if (sessionStorage.getItem('token'))
    return this.jwt.decodeToken(sessionStorage.getItem('token'));
  }
}