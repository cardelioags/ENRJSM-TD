import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PersonalService } from '../../../../services/personal.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personal-nuevo',
  templateUrl: './personal-nuevo.component.html',
  styleUrls: ['./personal-nuevo.component.css'],
  providers: [PersonalService]
})
export class PersonalNuevoComponent implements OnInit {
  private personal = {nombre: ''};
  private sub: any;
  private id: any;
  private titulo = ""

  constructor(
    private personalSrv: PersonalService, 
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    console.log(location.href);
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined){
        this.titulo = 'Editar Personal';
        this.personalSrv.personal(this.id)
        .subscribe((res:any) => {
          this.personal = res;
        })
      }else{
        this.titulo = 'Nuevo Personal';
      }
    })
  }

  guardar(){
    this.personalSrv.nuevo(this.personal)
      .subscribe(res => console.log(res));
  }

}
