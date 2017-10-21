import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { RolesService } from '../../../../services/roles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

@Component({
  selector: 'app-form-accion',
  templateUrl: './form-accion.component.html',
  styleUrls: ['./form-accion.component.css'],
})
export class FormAccionComponent implements OnInit {
  public accion: any = this.data.accion;
  public rol: any = {};
  private sub: any;
  public id: any;
  public titulo = ""
  public fecha: Date;

  constructor(
    public dialogRef: MatDialogRef<FormAccionComponent>,
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private _router: Router,
    private dateAdapter: DateAdapter<NativeDateAdapter>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
     dateAdapter.setLocale('es-MX');
    }
  
  ngOnInit() {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}