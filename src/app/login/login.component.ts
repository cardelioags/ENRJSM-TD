import { Component, OnInit } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public media: TdMediaService) { }

  ngOnInit() {
  }

}
