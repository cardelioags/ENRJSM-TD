import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class AspectoService {
    pantalla_completa: boolean = false;
    pantalla_completaObs = new Subject();
    toggleRelacion(){
        this.pantalla_completaObs.next(!this.pantalla_completa)
        this.pantalla_completa = !this.pantalla_completa
    }
}