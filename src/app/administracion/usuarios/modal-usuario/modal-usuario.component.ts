import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RolesService } from "../../../../services/roles.service";

@Component({
  selector: 'modal-usuario',
  templateUrl: './modal-usuario.component.html',
  providers: [RolesService]
})
export class ModalUsuarioComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalUsuarioComponent>,
    private _roles: RolesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
