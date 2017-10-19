import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { RolesService } from '../../../../services/roles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-form-accion',
  templateUrl: './form-accion.component.html',
  styleUrls: ['./form-accion.component.css'],
  providers: [RolesService]
})
export class FormAccionComponent implements OnInit {
  public rol: any = {};
  private sub: any;
  public id: any;
  public titulo = ""

  constructor(
    public dialogRef: MatDialogRef<FormAccionComponent>,
    private _roles: RolesService,
    private ch: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public accion: any
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
 
  }

}