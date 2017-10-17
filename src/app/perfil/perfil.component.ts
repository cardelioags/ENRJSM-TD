import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { PersonalService } from "../../services/personal.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [PersonalService]
})
export class PerfilComponent implements OnInit, AfterViewInit {
  
  persona: any = {};

  constructor(private _login: LoginService, private _personal: PersonalService) { }
  ngOnInit() {
    console.log(this._login.usuario);
  }
  ngAfterViewInit() {
    this._personal.personal(this._login.getUsr().personal)
    .subscribe(res => {
      this.persona = res;
      console.log(res)
    })

  }
}
