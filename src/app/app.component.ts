import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  },{
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
  navmenu: Object[] = [{
    icon: 'looks_one',
    route: '.',
    title: 'First item',
    description: 'Item description',
  }, {
    icon: 'looks_two',
    route: '.',
    title: 'Second item',
    description: 'Item description',
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
    
    /*setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });*/
  }
}
