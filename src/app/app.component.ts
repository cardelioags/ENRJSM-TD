import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { AspectoService } from "../services/aspecto.service";
import { LoginService } from "../services/login.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AspectoService, LoginService]
})
export class AppComponent implements AfterViewInit {
  permisos: any = this._login.getUsr().permisos[0];


  usermenu: Object[] = [{
    icon: 'exit_to_app',
    route: '.',
    title: 'Cerrar Sesión',
  },
  ];
  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    private _login: LoginService,
    private aspecto: AspectoService) {

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    })
  }
}
