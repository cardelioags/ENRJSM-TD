import { Component, OnInit } from '@angular/core';
import { TutoriasService } from "../../../services/tutorias.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { StepState } from '@covalent/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
        this.getPlanActivo(res);
        console.log(res);
      })
    })

  }
  getPlanActivo(tutoria) {
    if ( tutoria !== undefined && tutoria.planes.length > 0 ) {
      for (let i in tutoria.planes) {
        if (new Date() >= new Date(tutoria.planes[i].fecha_inicio) && new Date() <= new Date(tutoria.planes[i].fecha_termino)){
          this.plan = tutoria.planes[i];
          this.planActivo = true;
        } else {
          this.planActivo = false;
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
  openDialogPlan(plan?:any): void {
    if(!plan) this.crearPlan();
    let dialogRef = this.dialog.open(FormPlanComponent, {
      width: '700px',
      data: {plan: this.plan}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined){
        this._tutorias.guardarPlan({plan: result, tutoria: this.tutoria._id})
        .subscribe(res => {
          this.plan = result;
          this.planActivo = true;
        })
      }
    });

  }
  openDialogAccion(): void {
    if(!this.accion) this.accion = new Accion();
    let dialogRef = this.dialog.open(FormAccionComponent, {
      width: '700px',
      data: {accion: this.accion}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined){
        this._tutorias.guardarAccion({accion: result, tutoria: this.tutoria._id, plan: this.plan})
        .subscribe(res => {
          this.plan.acciones.push(result);
        })
      }
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
  diagnostico: String;
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