import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ReportesComponent } from "./reportes/reportes.component";
import { MainAlumnosComponent } from "./alumnos/main.alumnos.component";
import { AlumnosComponent } from "./alumnos/alumnos/alumnos.component";
import { MainTutoresComponent } from "./tutores/main.tutores.component";
import { TutoresComponent } from "./tutores/tutores/tutores.component";
import { TutorNuevoComponent } from "./tutores/tutor-nuevo/tutor-nuevo.component";
import { EvaluacionComponent } from "./evaluacion/evaluacion.component";

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
        {path: '', component: TutoresComponent},
        {path: 'nuevo', component: TutorNuevoComponent},
        {path: 'editar/:id', component: TutorNuevoComponent}
      ]
  },
  { path: 'evaluacion', component: EvaluacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }