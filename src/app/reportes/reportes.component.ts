import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements AfterViewInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService) { }

  public navmenu = [
    {
      
    }
  ]

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }
}
