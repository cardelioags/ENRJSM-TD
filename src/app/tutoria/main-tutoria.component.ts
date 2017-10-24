import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from "@covalent/core";
import { LoginService } from "../../services/login.service";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-tutoria',
  templateUrl: './main-tutoria.component.html',
  styleUrls: ['./main-tutoria.component.css'],
  providers: [LoginService]
})
export class MainTutoriaComponent implements AfterViewInit {

  

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    private _login: LoginService,
  ) { }

  permisos: any = this._login.getUsr().permisos[0];

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }

}
