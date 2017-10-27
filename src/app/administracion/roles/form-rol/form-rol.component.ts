import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RolesService } from '../../../../services/roles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.css'],
  providers: [RolesService]
})
export class FormRolComponent implements OnInit {
  public rol: any = {};
  private sub: any;
  public id: any;
  public titulo = "";
  private permisos: any = {};

  public menus =
  [
    {
      titulo: "Alumnos", clave: "AL", permiso: false, submenus:
      [
        { titulo: "Alumnos", clave: "ALAL", permiso: false },
        { titulo: "Calificaciones", clave: "ALALCA", permiso: false }
      ]
    }, {
      titulo: "Tutores", clave: "TU", permiso: false, submenus:
      [
        { titulo: "Listar Tutores", clave: "TULI", permiso: false },
        { titulo: "Nuevo Tutor", clave: "TUNU", permiso: false }
      ]
    }, {
      titulo: "Tutorías", clave: "TA", permiso: false, submenus:
      [
        { titulo: "Asignación", clave: "TUAS", permiso: false },
        { titulo: "Mis Tutorados", clave: "TUMI", permiso: false },        
        { titulo: "Tutorados", clave: "TATU", permiso: false },
        { titulo: "Repositorio", clave: "TARE", permiso: false }
      ]
    }, {
      titulo: "Evaluación", clave: "EV", permiso: false, submenus:
      [
        { titulo: "Instrumentos", clave: "EVIN", permiso: false },
        { titulo: "Nuevo Instrumento", clave: "EVNI", permiso: false },
        { titulo: "Aplicaciones", clave: "EVAP", permiso: false },
        { titulo: "Nueva Aplicación", clave: "EVNA", permiso: false }
      ]
    }, {
      titulo: "Reportes", clave: "RE", permiso: false, submenus:
      [
        { titulo: "Evaluaciones", clave: "REEV", permiso: false },
        { titulo: "Tutoría", clave: "RETU", permiso: false },
        { titulo: "Generales", clave: "REGE", permiso: false },
        { titulo: "Calificaciones", clave: "RECA", permiso: false },
      ]
    }, {
      titulo: "Administración", clave: "AD", permiso: false, submenus:
      [
        { titulo: "Personal", clave: "ADPE", permiso: false },
        { titulo: "Alta Usuarios", clave: "ADAU", permiso: false },
        { titulo: "Nuevo Personal", clave: "ADNP", permiso: false },
        { titulo: "Usuarios", clave: "ADUS", permiso: false },
        { titulo: "Plan/Materias", clave: "ADPL", permiso: false },
        { titulo: "Roles/Permisos", clave: "ADRO", permiso: false },
        { titulo: "Nuevo Rol", clave: "ADNR", permiso: false },
        { titulo: "Carga Masiva", clave: "ADCM", permiso: false },
      ]
    }
  ]

  constructor(
    private _roles: RolesService,
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private _router: Router
  ) { }

  seleccion(x, y) {
    this.menus[x].submenus[y].permiso = !this.menus[x].submenus[y].permiso
    this.menus[x].permiso = this.menus[x].submenus.some((sub) => {
      return sub.permiso === true;
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.titulo = 'Editar Rol';
        this._roles.rol(this.id)
          .subscribe((res: any) => {
            this.rol = res;
            this.permisos = res.permisos[0];
            for (let i in this.menus) {
              if (this.permisos[this.menus[i].clave]) this.menus[i].permiso = true;
              for (let j in this.menus[i].submenus) {
                if (this.permisos[this.menus[i].submenus[j].clave]) this.menus[i].submenus[j].permiso = true;
              }
            }
          })

      } else {
        this.titulo = 'Nuevo Rol';
      }
    })
  }
  guardar() {
    if (this.id !== undefined) {
      this.rol.permisos = [this.getPermisos()];
      this._roles.editar(this.rol)
        .subscribe(res => {
          this._router.navigate(['administracion/roles']);
        })
    } else {
      this.rol.permisos = [this.getPermisos()];
      this._roles.nuevo(this.rol)
        .subscribe(res => {
          this._router.navigate(['administracion/roles']);
        });
    }
  }
  getPermisos() {
    let permiso = {}
    for (let i in this.menus) {
      if (this.menus[i].permiso) permiso[this.menus[i].clave] = true;
      for (let j in this.menus[i].submenus) {
        if (this.menus[i].submenus[j].permiso) permiso[this.menus[i].submenus[j].clave] = true;
      }
    }
    return permiso
  }
}