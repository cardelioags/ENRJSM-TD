import { Component, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { TutoresService } from "../../../services/tutores.service";

@Component({
  //changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css'],
  providers: [TutoresService]
})
export class TutoresComponent implements AfterViewInit {

  columns: ITdDataTableColumn[] = [
    { name: 'matricula', label: 'Matrícula', sortable: true, width:150},
    { name: 'nombre', label: 'Nombre', sortable: true, width: 300},
    { name: 'curp', label: 'CURP', width: 250 },
    { name: 'grado', label: 'Grado', hidden: false },
    { name: 'grupo', label: 'Grupo', sortable: true},
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
    private tutores: TutoresService,
    private chDet: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.tutores.todos()
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
