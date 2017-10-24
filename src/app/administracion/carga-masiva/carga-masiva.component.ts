import { Component, OnInit } from '@angular/core';
import { PlanesEstService } from "../../../services/planes-est.service";
import { AlumnosService } from "../../../services/alumnos.service"

import * as XLSX from 'xlsx';
type AOA = Array<Array<any>>;


@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css'],
  providers: [PlanesEstService, AlumnosService]
})
export class CargaMasivaComponent implements OnInit {


  constructor(private _planesEst: PlanesEstService, private _alumnos: AlumnosService) { }

  public data: any;
  private planesEst: any;

  ngOnInit() {
    this._planesEst.todos()
      .subscribe(res => {
        this.planesEst = res[0];
      })
  }
  onFileChange(evt: any) {
    /* wire up file reader */
    console.log(evt);
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    reader.readAsBinaryString(target.files[0]);
    console.log(this.data);
  }
  cargaCalificaciones() {
    var k = 0;
    var l = 0;
    for (var i = 1; i < 2/*this.data.length*/; i++) {
      let califAlu = this.planesEst;
      k=0;
      l=0;
      for (var j = 0; j < this.data[i].length; j++) {
        if (j == 3) {
          var matricula = this.data[i][j];
          console.log(matricula)
        } else if (j > 3) {
          if (l <= (califAlu.grados[k].materias.length-1)) {
            califAlu.grados[k].materias[l].calificacion = parseInt(this.data[i][j]);
            l++;
          } else {
            l = 0;
            k++;
          }
        }
      }
      this._alumnos.calificaciones(matricula, califAlu)
      .subscribe(res => {
        console.log(res);
      })
    }
  }
}
