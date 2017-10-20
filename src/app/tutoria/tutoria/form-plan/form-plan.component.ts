import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { RolesService } from '../../../../services/roles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

@Component({
  selector: 'app-form-plan',
  templateUrl: './form-plan.component.html',
  styleUrls: ['./form-plan.component.css'],
  providers: [RolesService]
})
export class FormPlanComponent implements OnInit {
  public plan: any = this.data.plan;
  public rol: any = {};
  private sub: any;
  public id: any;
  public titulo = ""
  public fecha: Date;

  constructor(
    public dialogRef: MatDialogRef<FormPlanComponent>,
    private _roles: RolesService,
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private _router: Router,
    private dateAdapter: DateAdapter<NativeDateAdapter>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
     dateAdapter.setLocale('es-MX');
    }
  dateChange(fecha){ 
    fecha = this.plan.fecha_inicio
    this.plan.fecha_inicio = new Date ()
    console.log(this.plan.fecha_inicio)
  }
 
  ngOnInit() {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}