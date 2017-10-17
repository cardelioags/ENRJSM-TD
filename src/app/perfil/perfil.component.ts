import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, AfterViewInit {

  usuario

  constructor(private _login: LoginService) { }
  ngOnInit() {
    console.log(this._login.usuario);
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
