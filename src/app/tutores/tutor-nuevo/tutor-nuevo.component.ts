import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TutoresService } from '../../../services/tutores.service'

@Component({
  selector: 'app-tutor-nuevo',
  templateUrl: './tutor-nuevo.component.html',
  styleUrls: ['./tutor-nuevo.component.css'],
  providers: [TutoresService]
})
export class TutorNuevoComponent implements OnInit {
  tutor = {nombre: ''};
  constructor(private tutores: TutoresService, private ch: ChangeDetectorRef) { }

  ngOnInit() {
  }

  guardar(){
    this.tutores.nuevo(this.tutor)
      .subscribe(res => console.log(res));
  }

}
