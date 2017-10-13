import { Component, AfterViewInit } from '@angular/core';

@Component({
  //changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-personal',
  templateUrl: './main-personal.component.html',
  styleUrls: ['./main-personal.component.css'],
  })
export class MainPersonalComponent implements AfterViewInit {
  constructor() { }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
}
