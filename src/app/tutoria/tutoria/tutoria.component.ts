import { Component, OnInit } from '@angular/core';
import { TutoriasService } from "../../../services/tutorias.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { StepState } from '@covalent/core';

@Component({
  selector: 'app-tutoria',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.css'],
  providers: [TutoriasService]
})
export class TutoriaComponent implements OnInit {

  tutoria: any = {};
  constructor(private _tutorias: TutoriasService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this._tutorias.tutoria(params['id']).subscribe(res => {
        this.tutoria = res;
        console.log(res);
      })
    })

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
