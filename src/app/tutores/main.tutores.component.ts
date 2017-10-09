import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-tutores',
  templateUrl: './main.tutores.component.html',
  styleUrls: ['./main.tutores.component.css'],
})
export class MainTutoresComponent implements AfterViewInit {
  navmenu: Object[] = [{
    icon: 'looks_one',
    route: '/tutores',
    title: 'Listar Tutores',
    description: 'Alumnos',
  }, {
    icon: 'looks_two',
    route: '/tutores/nuevo',
    title: 'Nuevo Tutor',
    description: 'Calificaciones',
  }, {
    icon: 'looks_3',
    route: '.',
    title: 'Third item',
    description: 'Item description',
  }, {
    icon: 'looks_4',
    route: '.',
    title: 'Fourth item',
    description: 'Item description',
  }, {
    icon: 'looks_5',
    route: '.',
    title: 'Fifth item',
    description: 'Item description',
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
