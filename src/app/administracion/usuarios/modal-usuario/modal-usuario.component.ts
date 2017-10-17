import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RolesService } from "../../../../services/roles.service";

@Component({
  selector: 'modal-usuario',
  templateUrl: './modal-usuario.component.html',
  providers: [RolesService]
})
export class ModalUsuarioComponent implements OnInit {

  public roles: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<ModalUsuarioComponent>,
    private _roles: RolesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._roles.todos()
    .subscribe(res => {
      this.roles = res;
    })
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
