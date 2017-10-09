import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TutoresService } from '../../../services/tutores.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tutor-nuevo',
  templateUrl: './tutor-nuevo.component.html',
  styleUrls: ['./tutor-nuevo.component.css'],
  providers: [TutoresService]
})
export class TutorNuevoComponent implements OnInit {
  private tutor = {nombre: ''};
  private sub: any;
  private id: any;
  private titulo = ""

  constructor(
    private tutores: TutoresService, 
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    console.log(location.href);
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined){
        this.titulo = 'Editar Tutor';
        this.tutores.tutor(this.id)
        .subscribe((res:any) => {
          this.tutor = res;
        })
      }else{
        this.titulo = 'Nuevo Tutor';
      }
    })
  }

  guardar(){
    this.tutores.nuevo(this.tutor)
      .subscribe(res => console.log(res));
  }

}
