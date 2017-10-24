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
    this._http.post('http://localhost:3000/api/login', { usr: usr, pass: pass }, { headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map(res => res.json())
      .subscribe((res:any) => {
        if(res.token && res.estado){
          localStorage.setItem('token',res.token);
          this.usuario = this.jwt.decodeToken(res.token);
          this.subLogged.next(true);
        }
      })
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