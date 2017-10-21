import { Component, OnInit } from '@angular/core';
import { PlanesEstService } from "../../../services/planes-est.service"

@Component({
  selector: 'app-planes-est',
  templateUrl: './planes-est.component.html',
  styleUrls: ['./planes-est.component.css'],
  providers:[PlanesEstService]
})
export class PlanesEstComponent implements OnInit {

  constructor(private _planesEst: PlanesEstService) { }
  planes: any[] = []

  ngOnInit() {
    this._planesEst.todos()
    .subscribe(res => {
      this.planes = res;
      console.log(res);
    })
  }

}
