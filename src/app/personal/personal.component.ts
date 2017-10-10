import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements AfterViewInit {
  navmenu: Object[] = [{
    icon: 'list',
    route: '/tutorias',
    title: 'Lista de Personal',
    description: 'Muestra todos los tutores',
  }, {
    icon: 'person_add',
    route: '/tutorias/registro',
    title: 'Registrar Personal',
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
