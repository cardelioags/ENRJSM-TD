import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css'],
})
export class EvaluacionComponent implements AfterViewInit {
  navmenu: Object[] = [{
    icon: 'group',
    route: '.',
    title: 'Instrumentos',
    description: 'Alumnos',
  }, {
    icon: 'playlist_add_check',
    route: '.',
    title: 'Nuevo Instrumento',
    description: 'Calificaciones',
  }, {
    icon: 'looks_3',
    route: '.',
    title: 'Aplicaciones',
    description: 'Aplicaciones',
  }, {
    icon: 'looks_3',
    route: '.',
    title: 'Nueva Aplicación',
    description: 'Nueva Aplicación',
  }
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
