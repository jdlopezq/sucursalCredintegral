import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private routes:Router, private token:LogService
  ){}
  ngOnInit(){
  //  this.token.getToken()
// this.routes.navigate(["/login"])
  }
}
