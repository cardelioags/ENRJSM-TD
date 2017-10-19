import { Component, OnInit } from '@angular/core';
import { TutoriasService } from "../../../services/tutorias.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { StepState } from '@covalent/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormAccionComponent } from "./form-accion/form-accion.component";
import { FormPlanComponent } from "./form-plan/form-plan.component";

@Component({
  selector: 'app-tutoria',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.css'],
  providers: [TutoriasService]
})
export class TutoriaComponent implements OnInit {

  tutoria: any;
  planActivo: boolean = false;
  plan: Plan;
  accion: Accion;
 

  constructor(
    private _tutorias: TutoriasService, 
    private actRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this._tutorias.tutoria(params['id']).subscribe(res => {
        this.tutoria = res;
        console.log(res);
      })
    })

  }
  getPlanActivo() {
    if ( this.tutoria != undefined && this.tutoria.planes.length > 0 ) {
      for (let i in this.tutoria.planes) {
        if (Date() >= this.tutoria.planes[i].fecha_inicio && Date() <= this.tutoria.planes[i].fecha_termino){
          return this
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  crearPlan(){
    this.plan = new Plan();
  }
  crearAccion(){
    this.accion = new Accion();
  }
  openDialogPlan(id): void {
    this.crearPlan();
    let dialogRef = this.dialog.open(FormPlanComponent, {
      width: '700px',
      data: {plan: this.plan}
    });
  }
  openDialogAccion(id): void {
    this.crearAccion();
    let dialogRef = this.dialog.open(FormAccionComponent, {
      width: '700px',
      data: {accion: this.accion}
    });
  }



  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
}

class Plan {
  tutor: String;
  objetivo: String;
  conclusion: String;
  fecha_inicio: Date;
  fecha_termino: Date;
  estado: String;
  acciones: any[];    
}
class Accion {
  objetivo: String;
  fecha_inicio: Date;
  fecha_termino: Date;
  estado: String;
  observaciones: String[];
  total_concluido: Number;

}