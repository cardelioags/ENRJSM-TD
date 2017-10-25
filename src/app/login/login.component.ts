import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TdMediaService } from "@covalent/core";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
import { JwtHelper } from "angular2-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  jwt: JwtHelper = new JwtHelper()
  usr:String;
  pass: String;

  constructor(public media: TdMediaService, private _login: LoginService, private _router: Router) { }
  ngOnInit() {
    this._login.pubLogged.subscribe(res => {
      if (res)
      this._router.navigate(['/perfil']);
    })
    if(this._login.loggedIn()){
      this._router.navigate(['/perfil']);
    }
  }
  login(usr, pass){
    this._login.login(usr, pass);
  }
}
