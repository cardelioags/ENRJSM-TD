import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ReportesComponent } from "./reportes/reportes.component";
import { MainAlumnosComponent } from "./alumnos/main.alumnos.component";
import { AlumnosComponent } from "./alumnos/alumnos/alumnos.component";
import { MainTutoresComponent } from "./tutores/main.tutores.component";
import { TutoresComponent } from "./tutores/tutores/tutores.component";
import { TutorNuevoComponent } from "./tutores/tutor-nuevo/tutor-nuevo.component";
import { MainTutoriaComponent } from "./tutoria/main-tutoria.component";
import { EvaluacionComponent } from "./evaluacion/evaluacion.component";
import { AdministracionComponent } from "./administracion/administracion.component";
import { PersonalComponent } from "./administracion/personal/personal.component";
import { RolesComponent } from "./administracion/roles/roles.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reportes', component: ReportesComponent },
  {
    path: 'alumnos', component: MainAlumnosComponent, children:
    [
      { path: '', component: AlumnosComponent }
    ]
  },
  {
    path: 'tutores', component: MainTutoresComponent, children:
    [
      { path: '', component: TutoresComponent },
      { path: 'nuevo', component: TutorNuevoComponent },
      { path: 'editar/:id', component: TutorNuevoComponent }
    ]
  },
  { path: 'tutoria', component: MainTutoriaComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  {
    path: 'administracion', component: AdministracionComponent, children:
      [
        { path: 'personal', component: PersonalComponent},
        { path: 'roles', component: RolesComponent},        
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }