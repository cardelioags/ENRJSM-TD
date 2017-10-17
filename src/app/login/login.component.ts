import { Component, OnInit } from '@angular/core';
import { TdMediaService } from "@covalent/core";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
import { JwtHelper } from "angular2-jwt";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  jwt: JwtHelper = new JwtHelper()
  constructor(public media: TdMediaService, private _login: LoginService, private _router: Router) { }
  ngOnInit() {
    if(this._login.loggedIn()){
      this._router.navigate(['/perfil']);
    }
  }
  login(usr, pass){
    this._login.login(usr, pass)
    .subscribe((res:any) => {
      if(res.token && res.estado){
        localStorage.setItem('token',res.token);
        this._login.usuario = this.jwt.decodeToken(res.token);
        this._router.navigate(['/perfil']);
      }
    })
;
  }
}
