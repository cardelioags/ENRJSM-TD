import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdDialogService } from "@covalent/core";
import { FormControl } from "@angular/forms";
import { PersonalService } from '../../../../services/personal.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'modal-asignacion',
  templateUrl: './modal-asignacion.component.html',
  providers: [PersonalService]
})
export class ModalAsignacionComponent implements OnInit {
  public personal: any[] = [];
  public tutor = { nombre: '', curp: '' };
  private sub: any;
  public id: any;
  public titulo = ""

  public filteredOptions: any[];  
  
  
  constructor(
    public dialogRef: MatDialogRef<ModalAsignacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _personal: PersonalService
  ) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._personal.todos()
    .subscribe((res)=>{
      this.personal = res;
      this.filteredOptions = res;
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  selectedPer(tutor): string{
    if (tutor) {
      return tutor.nombre
    } else {
      return "";
    }
  }
  selectedOpt(event){
    this.tutor = event.option.value;
  }
  filter(valor: any) {
    if (valor.nombre){
      this.filteredOptions = this.personal.filter(tutor =>
        tutor.nombre.toLowerCase().indexOf(valor.nombre.toLowerCase()) !== -1);
    } else {
    this.filteredOptions = this.personal.filter(tutor =>
      tutor.nombre.toLowerCase().indexOf(valor.toLowerCase()) !== -1);
    }
  }
 
  /*guardar() {
    this._personal.nuevo(this.tutor)
      .subscribe(
        (res:any) => {
 
        },
        err => console.log(err),
      );
  }*/
}
