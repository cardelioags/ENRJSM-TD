import { Component, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { AlumnosService } from "../../../services/alumnos.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalAsignacionComponent } from "../asignacion/modal-asignacion/modal-asignacion.component"
import { TutoriasService } from "../../../services/tutorias.service";

@Component({
  //changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css'],
  providers: [TutoriasService]
})
export class AsignacionComponent implements AfterViewInit {

  columns: ITdDataTableColumn[] = [
    { name: 'tutor._id', label: '', width:100},
    { name: 'nomTutor', label: 'Tutor', width: 200 },
    //{ name: 'matricula', label: 'Matrícula', sortable: true, width: 150 },
    { name: 'id', label: '', width:100},
    { name: 'nombre', label: 'Nombre', sortable: true, width: 200 },
    //{ name: 'curp', label: 'CURP', width: 250 },
    { name: 'gradogrupo', label: 'Grado/Grupo', sortable: true },
  ];

  data: any[] = [];

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'nombre';
  selectedRows: any[] = [];
  selectable = true;
  multiple = true;
  clickable = true;
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    private _dataTableService: TdDataTableService,
    private _alumnos: AlumnosService,
    private chDet: ChangeDetectorRef,
    public dialog: MatDialog,
    private _tutorias: TutoriasService
  ) { }

  ngAfterViewInit(): void {
    this.todos();
  }
  todos() {
    this._alumnos.todos()
      .subscribe(res => {
        this.data = res;
        this.filter();
      })
  }

  seleccionados() {
    console.log(this.selectedRows);
  }
  openDialog(): void {
    console.log(this.selectedRows);
    let dialogRef = this.dialog.open(ModalAsignacionComponent, {
      width: '700px',
      data: this.selectedRows
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
        this._tutorias.asignar(result)
          .subscribe(res => {
            this.todos();
            this.selectedRows = [];
          })
      }
    });
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

}
