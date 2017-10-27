import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login.service";


@Component({
  selector: 'app-tutoria-principal',
  templateUrl: './tutoria-principal.component.html',
  styleUrls: ['./tutoria-principal.component.css']
})
export class TutoriaPrincipalComponent implements OnInit {

  constructor(private _login: LoginService) { }

  public permisos = this._login.getUsr().permisos[0];

  ngOnInit() {
  }

}
