import { Component, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { PersonalService } from "../../../../services/personal.service";
import { AspectoService } from "../../../../services/aspecto.service";

@Component({
  //changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [PersonalService, AspectoService]
})
export class PersonalComponent implements AfterViewInit {

  columns: ITdDataTableColumn[] = [
    { name: '_id', label: 'Opciones'},
    { name: 'nombre', label: 'Nombre', sortable: true, width: 300},
    { name: 'curp', label: 'CURP', width: 200 },
    { name: 'email', label: 'Correo', width: 250 },    
    { name: 'funcion', label: 'Función'},
    { name: 'observacion', label: 'Observación', width: 300},
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
  selectable: true;
  multiple: true; 
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    private _dataTableService: TdDataTableService, 
    private personalSrv: PersonalService,
    private chDet: ChangeDetectorRef,
    public aspectoBool: AspectoService
  ) { }

  ngAfterViewInit(): void {
    this.personalSrv.todos()
      .subscribe(res => {
        this.data = res;
        this.selectable = true;
        this.multiple = true;
        console.log(res);
        this.filter();
      })
  }

  seleccionados(){
    console.log(this.selectedRows);
  }

  cambiaAspecto(){
    this.aspectoBool.toggleRelacion();
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
