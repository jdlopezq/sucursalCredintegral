import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IpService } from '../../services/ip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options: FormGroup;
  links = [{ name: "Resumen de productos", value: "./summary" },
           { name: "Estado de Tarjeta", value: "./relation" },
           { name: "Estados de Pago", value: "./state" },
           { name: "Utilizacion", value: "./utilization" },
           ]
  userInfo=JSON.parse(sessionStorage.userInfo)      
  actualTime: any
  actualip = new getIp
  showIni=true

  constructor(fb: FormBuilder, private ip: IpService, private routes:Router, 
              private sessionInfo: LogService) {
 
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });



  }
 
  ngOnInit() {
    console.log(this.sessionInfo.sessionInfo)
    this.sessionInfo.getSumary().subscribe()
    console.log(JSON.parse(sessionStorage.userInfo))

    this.userTime()
    this.ip.getIp().subscribe(res => {
      this.actualip = res
      console.log(res)
    })
    console.log(window.location.hostname)
  }
  userTime() {
    setInterval(() => {
      this.actualTime = new Date();
    }, 1000)
  }
  showInfo(){
    this.showIni=false
  }
  goLogIn(){
    sessionStorage.clear()
    this.routes.navigate(["/login"])
  }

}

export class getIp {
  ip: string
  about: string
}