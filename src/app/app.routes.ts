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
import { AsignacionComponent } from "./tutoria/asignacion/asignacion.component";
import { EvaluacionComponent } from "./evaluacion/evaluacion.component";
import { AdministracionComponent } from "./administracion/administracion.component";
import { MainPersonalComponent } from "./administracion/personal/main-personal.component";
import { PersonalComponent } from "./administracion/personal/personal/personal.component"
import { PersonalNuevoComponent } from "./administracion/personal/personal-nuevo/personal-nuevo.component";
import { MainRolesComponent } from "./administracion/roles/main-roles..component";
import { RolesComponent } from "./administracion/roles/roles/roles.component";
import { FormRolComponent } from "./administracion/roles/form-rol/form-rol.component";
import { MainUsuariosComponent } from "./administracion/usuarios/main-usuarios.component";
import { UsuariosComponent } from "./administracion/usuarios/usuarios/usuarios.component";
import { PerfilComponent } from "./perfil/perfil.component"


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent},
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
  {
    path: 'tutoria', component: MainTutoriaComponent, children:
      [
        {path: '', component: AsignacionComponent },
      ]
  },
  { path: 'evaluacion', component: EvaluacionComponent },
  {
    path: 'administracion', component: AdministracionComponent, children:
    [
      {
        path: 'personal', component: MainPersonalComponent, children:
        [
          { path: '', component: PersonalComponent },
          { path: 'nuevo', component: PersonalNuevoComponent },
          { path: 'editar/:id', component: PersonalNuevoComponent }
        ]
      },
      {
        path: '', component: MainUsuariosComponent, children:
        [
          { path: 'usuarios', component: UsuariosComponent }
        ]
      },
      {
        path: 'roles', component: MainRolesComponent, children:
        [
          { path: '', component: RolesComponent },
          { path: 'nuevo', component: FormRolComponent },
          { path: 'editar/:id', component: FormRolComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }