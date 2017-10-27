import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { PersonalService } from "../../services/personal.service";
import { UsuariosService } from "../../services/usuarios.service";
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [PersonalService, UsuariosService]
})
export class PerfilComponent implements OnInit, AfterViewInit {

  persona: any = {};

  constructor(
    private _dialogService: TdDialogService,
    private _login: LoginService,
    private _personal: PersonalService,
    private _usuarios: UsuariosService
  ) { }
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
  openPrompt(): void {
    this._dialogService.openPrompt({
      message: 'Escribe la nueva contraseña con la que podrás ingresar al sistema.',
      disableClose: true, // defaults to false
      title: 'Cambiar mi contraseña', //OPTIONAL, hides if not provided
      cancelButton: 'Cancelar', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Guardar', //OPTIONAL, defaults to 'ACCEPT'
    }).afterClosed().subscribe((pass: string) => {
      if (pass) {
        this._usuarios.newpass(pass,this.persona._id)
        .subscribe(res => console.log(res));
      } else {

      }
    });
  }
}
