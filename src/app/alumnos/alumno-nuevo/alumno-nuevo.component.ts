import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlumnosService } from '../../../services/alumnos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alumno-nuevo',
  templateUrl: './alumno-nuevo.component.html',
  styleUrls: ['./alumno-nuevo.component.css'],
  providers: [AlumnosService]
})
export class AlumnoNuevoComponent implements OnInit {
  public alumno = {nombre: '', curp:''};
  private sub: any;
  public id: any;
  public titulo = ""

  constructor(
    private alumnosSrv: AlumnosService, 
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    console.log(location.href);
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined){
        this.titulo = 'Editar Alumno';
        this.alumnosSrv.alumno(this.id)
        .subscribe((res:any) => {
          this.alumno = res;
        })
      }else{
        this.titulo = 'Nuevo Alumno';
      }
    })
  }

  guardar(){
    this.alumnosSrv.nuevo(this.alumno)
      .subscribe(res => console.log(res));
  }

}
