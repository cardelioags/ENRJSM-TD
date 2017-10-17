import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-tutoria',
  templateUrl: './main-tutoria.component.html',
  styleUrls: ['./main-tutoria.component.css'],
})
export class MainTutoriaComponent implements AfterViewInit {
  navmenu: Object[] = [{
    icon: 'compare_arrows',
    route: '/tutoria',
    title: 'Asignación',
    description: 'Asignación de Tutor-Tutorado',
  },{
    icon: 'list',
    route: '/tutoria',
    title: 'Tutorados',
    description: 'Muestra todos los tutores',
  }, {
    icon: 'person_add',
    route: '/tutorias/registro',
    title: 'Tutorías',
    description: 'Calificaciones',
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
