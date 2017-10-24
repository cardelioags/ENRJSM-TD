import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ReportesComponent } from "./reportes/reportes.component";
import { MainAlumnosComponent } from "./alumnos/main.alumnos.component";
import { AlumnosComponent } from "./alumnos/alumnos/alumnos.component";
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
import { PerfilComponent } from "./perfil/perfil.component";
import { TutoradosComponent } from "./tutoria/tutorados/tutorados.component";
import { MisTutoradosComponent } from "./tutoria/mis-tutorados/mis-tutorados.component";
import { TutoriaComponent } from "./tutoria/tutoria/tutoria.component";
import { CamaraComponent } from "./camara/camara.component";
import { PlanesEstComponent } from "./administracion/planes-est/planes-est.component";
import { CargaMasivaComponent } from "./administracion/carga-masiva/carga-masiva.component";



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'camara/:id', component: CamaraComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reportes', component: ReportesComponent },
  {
    path: 'alumnos', component: MainAlumnosComponent, children:
    [
      { path: '', component: AlumnosComponent }
    ]
  },
  {
    path: 'tutoria', component: MainTutoriaComponent, children:
    [
      { path: '', component: AsignacionComponent },
      { path: 'tutorados', component: TutoradosComponent },
      { path: 'mistutorados', component: MisTutoradosComponent },
    ]
  },
  { path: 'tutoria/:id', component: TutoriaComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  {
    path: 'administracion', component: AdministracionComponent, children:
    [
      {
        path: 'planesEst', component: PlanesEstComponent
      },
      {
        path: 'cargaMasiva', component: CargaMasivaComponent
      },
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