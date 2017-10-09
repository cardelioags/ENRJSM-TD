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
    icon: 'list',
    route: '/tutores',
    title: 'Listar Tutores',
    description: 'Muestra todos los tutores',
  }, {
    icon: 'person_add',
    route: '/tutores/nuevo',
    title: 'Nuevo Tutor',
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
