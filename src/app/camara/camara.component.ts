import { Component, OnInit, ViewChild } from '@angular/core';
import { FotoService } from "../../services/foto.service"
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css'],
  providers: [FotoService]
})
export class CamaraComponent implements OnInit {
  @ViewChild('hardwareVideo') hardwareVideo: any;
  @ViewChild('canvas') canvas: any;

  constructor(private _foto:FotoService, private _route:ActivatedRoute){}
  
  _navigator = <any>navigator;
  localStream;
  
  video:any; 
  foto:any;
  img:any;
  ngOnInit() {

    this.video = this.hardwareVideo.nativeElement;
    this.foto = this.canvas.nativeElement;
    this._navigator = <any>navigator;

    this._navigator.getUserMedia = (this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
      || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia);

    this._navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.localStream = stream;
        this.video.src = window.URL.createObjectURL(stream);
        this.video.play();
      });

  }

  stopStream() {
    const tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }
  capturaFoto(){
    this.foto.getContext("2d").drawImage(this.video, 0, 0, 600, 420);
    this.img = this.foto.toDataURL("image/jpg");
  }
  guardar(){
    this._route.params.subscribe(params => {
      this._foto.subirFoto(this.img, params.id)
      .subscribe(res => {
        console.log(res);
      })        
    })
  }

}

