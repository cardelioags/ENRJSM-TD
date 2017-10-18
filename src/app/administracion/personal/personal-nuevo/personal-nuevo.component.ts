import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PersonalService } from '../../../../services/personal.service';
import { TdDialogService } from "@covalent/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-personal-nuevo',
  templateUrl: './personal-nuevo.component.html',
  styleUrls: ['./personal-nuevo.component.css'],
  providers: [PersonalService]
})
export class PersonalNuevoComponent implements OnInit {
  public personal = { nombre: '' };
  private sub: any;
  public id: any;
  public titulo = ""

  constructor(
    private personalSrv: PersonalService,
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private _dialog: TdDialogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.titulo = 'Editar Personal';
        this.personalSrv.personal(this.id)
          .subscribe((res: any) => {
            this.personal = res;
          })
      } else {
        this.titulo = 'Nuevo Personal';
      }
    })
  }

  guardar() {
    if (this.id === undefined) {
      this.personalSrv.nuevo(this.personal)
        .subscribe(
        (res: any) => {
          if (res.code == 11000) {
            this._dialog.openAlert({
              message: "El Personal ya Existe",
              closeButton: 'Cerrar',
              title: 'Alerta'
            })
          } else {
            this.router.navigate(['/administracion/personal']);
          }
        },
        err => console.log(err),
      );
    } else {
      this.personalSrv.editar(this.personal)
      .subscribe(res => {
        this.router.navigate(['/administracion/personal'])
      })
    }
  }

}
