import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { UsuariosService } from "./usuarios.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService {
  constructor(private _usuarios: UsuariosService, private _http: Http) { }
  public usuario: any;
  jwt: JwtHelper = new JwtHelper();
  login(usr, pass) {
    return this._http.post('http://localhost:3000/api/login', { usr: usr, pass: pass }, { headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map(res => res.json());
  }
  loggedIn(): boolean {
    return tokenNotExpired();
  }
  logout() {
    localStorage.clear();
  }
  getUsr() {
    return this.jwt.decodeToken(localStorage.getItem('token'));
  }
}