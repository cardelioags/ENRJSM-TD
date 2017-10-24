import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app.routes";

/**
 * Framework Teradata Covalent
 *  */
import { 
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentMediaModule,
  TdMediaService,
  CovalentDataTableModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentDialogsModule,
  CovalentFileModule
} from "@covalent/core";
/**
 * Angular Material
 */
import { 
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatDialog,
  MatTooltipModule,
  MatPseudoCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule
} from "@angular/material";
/**
 * Móludo Auth JWT
 */
import { AuthModule } from "./auth.module";
/**
 * Servicios
 */
import { AlumnosService } from "../services/alumnos.service";
import { UsuariosService } from "../services/usuarios.service";
import { LoginService } from "../services/login.service";
/**
 * Componentes  
 * */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MainAlumnosComponent } from './alumnos/main.alumnos.component';
import { AlumnosComponent } from "./alumnos/alumnos/alumnos.component";
import { AlumnoNuevoComponent } from "./alumnos/alumno-nuevo/alumno-nuevo.component";
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { CalificacionesComponent } from './alumnos/calificaciones/calificaciones.component';
import { MainTutoriaComponent } from './tutoria/main-tutoria.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MainPersonalComponent } from './administracion/personal/main-personal.component';
import { PersonalNuevoComponent } from "./administracion/personal/personal-nuevo/personal-nuevo.component";
import { TutoradosComponent } from './tutoria/tutorados/tutorados.component';
import { MisTutoradosComponent } from './tutoria/mis-tutorados/mis-tutorados.component';
import { MainRolesComponent } from "./administracion/roles/main-roles..component";
import { RolesComponent } from './administracion/roles/roles/roles.component';
import { PersonalComponent } from './administracion/personal/personal/personal.component';
import { MainUsuariosComponent } from './administracion/usuarios/main-usuarios.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios/usuarios.component';
import { ModalUsuarioComponent } from './administracion/usuarios/modal-usuario/modal-usuario.component';
import { FormRolComponent } from './administracion/roles/form-rol/form-rol.component';
import { TutoriasComponent } from './tutoria/tutorias/tutorias.component';
import { AsignacionComponent } from './tutoria/asignacion/asignacion.component';
import { ModalAsignacionComponent } from './tutoria/asignacion/modal-asignacion/modal-asignacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CamaraComponent } from './camara/camara.component';
import { TutoriaComponent } from './tutoria/tutoria/tutoria.component';
import { FormAccionComponent } from './tutoria/tutoria/form-accion/form-accion.component';
import { FormPlanComponent } from './tutoria/tutoria/form-plan/form-plan.component';
import { PlanesEstComponent } from './administracion/planes-est/planes-est.component';
import { CargaMasivaComponent } from './administracion/carga-masiva/carga-masiva.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportesComponent,
    MainAlumnosComponent,
    AlumnosComponent,
    AlumnoNuevoComponent,
    EvaluacionComponent,
    CalificacionesComponent,
    MainTutoriaComponent,
    AdministracionComponent,
    MainPersonalComponent,
    PersonalNuevoComponent,
    TutoradosComponent,
    MisTutoradosComponent,
    RolesComponent,
    PersonalComponent,
    MainUsuariosComponent,
    UsuariosComponent,
    ModalUsuarioComponent,
    MainRolesComponent,
    FormRolComponent,
    TutoriasComponent,
    AsignacionComponent,
    ModalAsignacionComponent,
    PerfilComponent,
    CamaraComponent,
    TutoriaComponent,
    FormAccionComponent,
    FormPlanComponent,
    PlanesEstComponent,
    CargaMasivaComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentSearchModule,
    CovalentDialogsModule,
    CovalentStepsModule,
    CovalentFileModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AuthModule
  ],
  providers: [
    TdMediaService,
    AlumnosService,
    MatDialog,
    UsuariosService,
    LoginService
  ],
  entryComponents: [
    ModalUsuarioComponent,
    ModalAsignacionComponent,
    FormAccionComponent,
    FormPlanComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
