import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
})
export class AdministracionComponent implements AfterViewInit {
  navmenu: Object[] = [{
    icon: 'group',
    route: '/administracion/personal',
    title: 'Personal',
    description: 'Personal',
  }, {
    icon: 'face',
    route: '.',
    title: 'Usuarios',
    description: 'Usuarios',
  }, {
    icon: 'list',
    route: '.',
    title: 'Plan/Materias',
    description: 'Catálogo de Materias',
  }, {
    icon: 'build',
    route: '.',
    title: 'Configuración',
    description: 'Configuración del Sistema',
  },
  ];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService) { }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }

}
