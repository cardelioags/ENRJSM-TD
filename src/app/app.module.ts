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
  CovalentDialogsModule
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
  MatPseudoCheckboxModule
} from "@angular/material";

/**
 * Servicios
 */
import { AlumnosService } from "../services/alumnos.service";
/**
 * Componentes  
 * */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MainAlumnosComponent } from './alumnos/main.alumnos.component';
import { AlumnosComponent } from "./alumnos/alumnos/alumnos.component";
import { AlumnoNuevoComponent } from "./alumnos/alumno-nuevo/alumno-nuevo.component";
import { MainTutoresComponent } from './tutores/main.tutores.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { CalificacionesComponent } from './alumnos/calificaciones/calificaciones.component';
import { TutoresComponent } from './tutores/tutores/tutores.component';
import { TutorNuevoComponent } from './tutores/tutor-nuevo/tutor-nuevo.component';
import { MainTutoriaComponent } from './tutoria/main-tutoria.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MainPersonalComponent } from './administracion/personal/main-personal.component';
import { PersonalNuevoComponent } from "./administracion/personal/personal-nuevo/personal-nuevo.component";
import { TutoradosComponent } from './tutoria/tutorados/tutorados.component';
import { MainRolesComponent } from "./administracion/roles/main-roles..component";
import { RolesComponent } from './administracion/roles/roles/roles.component';
import { PersonalComponent } from './administracion/personal/personal/personal.component';
import { MainUsuariosComponent } from './administracion/usuarios/main-usuarios.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios/usuarios.component';
import { ModalUsuarioComponent } from './administracion/usuarios/modal-usuario/modal-usuario.component';
import { FormRolComponent } from './administracion/roles/form-rol/form-rol.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportesComponent,
    MainAlumnosComponent,
    AlumnosComponent,
    AlumnoNuevoComponent,
    MainTutoresComponent,
    EvaluacionComponent,
    CalificacionesComponent,
    TutoresComponent,
    TutorNuevoComponent,
    MainTutoriaComponent,
    AdministracionComponent,
    MainPersonalComponent,
    PersonalNuevoComponent,
    TutoradosComponent,
    RolesComponent,
    PersonalComponent,
    MainUsuariosComponent,
    UsuariosComponent,
    ModalUsuarioComponent,
    MainRolesComponent,
    FormRolComponent
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
    MatCheckboxModule
  ],
  providers: [
    TdMediaService,
    AlumnosService,
    MatDialog
  ],
  entryComponents: [
    ModalUsuarioComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
