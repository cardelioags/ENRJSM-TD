import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TdDialogService } from "@covalent/core";
import { FormControl } from "@angular/forms";
import { TutoresService } from '../../../services/tutores.service';
import { PersonalService } from '../../../services/personal.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tutor-nuevo',
  templateUrl: './tutor-nuevo.component.html',
  styleUrls: ['./tutor-nuevo.component.css'],
  providers: [TutoresService, PersonalService, TdDialogService]
})
export class TutorNuevoComponent implements OnInit {
  public tutor = { nombre: '', curp: '' };
  private sub: any;
  public id: any;
  public titulo = ""
  public personal: any[] = [];
  public persona: any;
  public filteredOptions: any[];
  public valPersonal: any;

  constructor(
    private tutores: TutoresService,
    private personalSrv: PersonalService,
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private _dialog: TdDialogService
  ) { }

  ngOnInit() {
    this.personalSrv.todos().subscribe(res => {
      this.personal = res;
      this.filteredOptions = res;
    })
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.titulo = 'Editar Tutor';
        this.tutores.tutor(this.id)
          .subscribe((res: any) => {
            this.tutor = res;
          })
      } else {
        this.titulo = 'Nuevo Tutor';
      }
    })
  }
  selectedPer(persona): string{
    if (persona) {
      return persona.nombre
    } else {
      return "";
    }
  }
  selectedOpt(event){
    this.persona = event.option.value;
    console.log(this.persona);
  }
  filter(valor: any) {
    if (valor.nombre){
      this.filteredOptions = this.personal.filter(persona =>
        persona.nombre.toLowerCase().indexOf(valor.nombre.toLowerCase()) !== -1);
    } else {
    this.filteredOptions = this.personal.filter(persona =>
      persona.nombre.toLowerCase().indexOf(valor.toLowerCase()) !== -1);
    }
  }
 
  guardar() {
    this.tutores.nuevo(this.persona._id)
      .subscribe(
        (res:any) => {
          if (res.code == 11000){
            this._dialog.openAlert({
              message:"Tutor ya registrado",
              closeButton:'Cerrar',
              title: 'Alerta'
            })
          } else {
            this.router.navigate(['/tutores']);
          }
        },
        err => console.log(err),
      );
  }

}
