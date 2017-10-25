import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { AspectoService } from "../services/aspecto.service";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  permisos: any = {};

  usermenu: Object[] = [{
    icon: 'exit_to_app',
    route: '.',
    title: 'Cerrar Sesión',
  },
  ];
  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    private _login: LoginService,
    private _router: Router
  ) { }
  ngOnInit() {
    this._login.pubLogged.subscribe(res => {
      if (res) {
        this.permisos = this._login.getUsr().permisos[0];
        this._changeDetectorRef.detectChanges();
      }
    })
    if (this._login.loggedIn()) {
      this.permisos = this._login.getUsr().permisos[0];
    } else {
      this.permisos = {};
      this._router.navigate['/login'];
    }
  }

  ngAfterViewInit(): void {

    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    })
  }
}
