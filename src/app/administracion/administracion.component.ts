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
  navmenu: Object[] = [{
    icon: 'group',
    route: '/administracion/personal',
    title: 'Personal',
    description: 'Personal',
  }, {
    icon: 'person_add',
    route: '/administracion/personal/nuevo',
    title: 'Nuevo Personal',
    description: 'Añadir nuevo personal',
  },{
    icon: 'face',
    route: '/administracion/usuarios',
    title: 'Usuarios',
    description: 'Usuarios',
  }, {
    icon: 'list',
    route: '.',
    title: 'Plan/Materias',
    description: 'Catálogo de Materias',
  }, {
    icon: 'perm_identity',
    route: '/administracion/roles',
    title: 'Roles/Permisos',
    description: 'Administración de Roles y Permisos',
  },{
    icon: 'perm_identity',
    route: '/administracion/roles/nuevo',
    title: 'Nuevo Rol',
    description: 'Crear nuevo Rol',
  },{
    icon: 'perm_identity',
    route: '/administracion/planesEst',
    title: 'Plan de estudios',
    description: 'Planes de Estudio',
  },{
    icon: 'build',
    route: '.',
    title: 'Configuración',
    description: 'Configuración del Sistema',
  },
  ];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    public _login: LoginService
  ) { }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }
  

}
