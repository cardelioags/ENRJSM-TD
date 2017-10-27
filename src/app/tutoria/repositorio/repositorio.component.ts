import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { RepositorioService } from "../../../services/repositorio.service";
import { LoginService } from "../../../services/login.service";

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css'],
  providers:[RepositorioService]
})
export class RepositorioComponent implements OnInit {

  permisos: any = this._login.getUsr().permisos[0];

  public uploader:FileUploader = new FileUploader({url:'/upload'});
  constructor(private _repositorio: RepositorioService, private _login:LoginService) { }

  archivos: any;

  ngOnInit() {
    this.getArchivos()
  }

  getArchivos(){
    this._repositorio.archivos()
    .subscribe(res => {
      this.archivos=res;
    })
  }
}
