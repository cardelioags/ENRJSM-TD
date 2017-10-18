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
  public titulo = ""
  public menus =
  [
    {
      titulo: "Alumnos", permiso: false, submenus:
      [
        { titulo: "Alumnos", permiso: false },
        { titulo: "Calificaciones", permiso: false }
      ]
    }, {
      titulo: "Tutores", permiso: false, submenus:
      [
        { titulo: "Listar Tutores", permiso: false },
        { titulo: "Nuevo Tutor", permiso: false }
      ]
    }, {
      titulo: "Tutorías", permiso: false, submenus:
      [
        { titulo: "Asignación", permiso: false },
        { titulo: "Tutorados", permiso: false },
        { titulo: "Tutorías", permiso: false }
      ]
    }, {
      titulo: "Evaluación", permiso: false, submenus:
      [
        { titulo: "Instrumentos", permiso: false },
        { titulo: "Nuevo Instrumento", permiso: false },
        { titulo: "Aplicaciones", permiso: false },
        { titulo: "Nueva Aplicación", permiso: false }
      ]
    }, {
      titulo: "Reportes", permiso: false, submenus:
      [
        { titulo: "Evaluaciones", permiso: false },
        { titulo: "Tutoría", permiso: false },
        { titulo: "Generales", permiso: false },
        { titulo: "Calificaciones", permiso: false },
      ]
    }, {
      titulo: "Administración", permiso: false, submenus:
      [
        { titulo: "Personal", permiso: false },
        { titulo: "Nuevo Personal", permiso: false },
        { titulo: "Usuarios", permiso: false },
        { titulo: "Plan/Materias", permiso: false },
        { titulo: "Roles/Permisos", permiso: false },
        { titulo: "Configuración", permiso: false }
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
            this.menus = res.permisos;
          })
      } else {
        this.titulo = 'Nuevo Rol';
      }
    })
  }
  guardar() {
    if (this.id !== undefined) {
      this.rol.permisos = this.menus;
      this._roles.editar(this.rol)
      .subscribe(res => {
        this._router.navigate(['administracion/roles']);
      })
    } else {
      this.rol.permisos = this.menus;
      this._roles.nuevo(this.rol)
        .subscribe(res => {
          this._router.navigate(['administracion/roles']);
        });
    }
  }
}