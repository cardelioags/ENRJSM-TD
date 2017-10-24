import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from "@covalent/core";
import { LoginService } from "../../services/login.service";


@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
  providers: [LoginService]
})
export class AdministracionComponent implements AfterViewInit {
  public permisos:any = this._login.getUsr().permisos[0];
  
  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    public _login: LoginService,
  ) { 

  
  }
  ngAfterViewInit(): void {
  
  
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }


}
