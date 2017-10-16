import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { AspectoService } from "../services/aspecto.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AspectoService ]
})
export class AppComponent implements AfterViewInit {
  routes: Object[] = [{
    icon: 'home',
    route: '/login',
    title: 'Principal',
  }, {
    icon: 'face',
    route: '/alumnos',
    title: 'Alumnos',
  }, {
    icon: 'supervisor_account',
    route: '/tutores',
    title: 'Tutores',
  }, {
    icon: 'school',
    route: '/tutoria',
    title: 'Tutorías',
  }, {
    icon: 'playlist_add_check',
    route: '/evaluacion',
    title: 'Evaluación',
  }, {
    icon: 'insert_chart',
    route: '/reportes',
    title: 'Reportes',
  }, {
    icon: 'security',
    route: '/administracion',
    title: 'Administración',
  },
  ];
  usermenu: Object[] = [{
    icon: 'swap_horiz',
    route: '.',
    title: 'Switch account',
  }, {
    icon: 'tune',
    route: '.',
    title: 'Account settings',
  }, {
    icon: 'exit_to_app',
    route: '.',
    title: 'Sign out',
  },
  ];

  aspectoBool=true;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    private aspecto: AspectoService) { }
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.aspecto.pantalla_completaObs
    .map((res:boolean) => res)
    .subscribe(res => {

    })
    /*setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });*/
  }
}
