import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import {Badpassword, Blockacount, Baduser} from '../popups/popups.component'
import { MatDialogRef, MatDialog } from '@angular/material';
import { RegistuserComponent } from '../registuser/registuser.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  maxTextLen=4
  tiles = [
    {text: '1', cols: 1, rows: 1, color: '#01579b', mask:'*'},
    {text: '2', cols: 1, rows: 1, color: '#0288d1', mask:'*'},
    {text: '3', cols: 1, rows: 1, color: '#0277bd', mask:'*'},
    {text: '4', cols: 1, rows: 1, color: '#58a5f0', mask:'*'},
    {text: '5', cols: 1, rows: 1, color: '#01579b', mask:'*'},
    {text: '6', cols: 1, rows: 1, color: '#0288d1', mask:'*'},
    {text: '7', cols: 1, rows: 1, color: '#0277bd', mask:'*'},
    {text: '8', cols: 1, rows: 1, color: '#58a5f0', mask:'*'},
    {text: '9', cols: 1, rows: 1, color: '#01579b', mask:'*'},
    {text: '0', cols: 1, rows: 1, color: '#0288d1', mask:'*'}
  ];
 
  showNumber:boolean=true
  showDots:boolean=false
  ChangeVar
  user= new UserData
  password =""
  loading:boolean=false
  popuplogin:MatDialogRef<Badpassword>
  createuser:MatDialogRef<RegistuserComponent>
  constructor(private routes:Router, private logIn:LogService, private dialog:MatDialog) { }

  ngOnInit() {
  
    
    this.ChangeVar=this.tiles
    this.shuffle(this.tiles)
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

seeNumber(a){
this.showNumber=true
this.showDots=false
}
seeDots(){
this.showNumber=false
this.showDots=true
}

clearPassword(){
  this.password=""
  this.user.password=""
}
setPassword(a){
  let pas=a
  this.password=this.password+pas
  this.user.password=this.password
  if(this.password.length>4){
  this.password=this.password.slice(0,4)
  }
  this.user.password=this.password
  console.log(this.user)
  console.log(+this.password)
}
log(){
  this.user.password="9163"
  this.user.username="rocketvision"
  this.loading=true
this.logIn.sendData("login?",this.user).subscribe(data=>{
  if(this.logIn.sessionInfo.status=="ACTIVE"){
    this.routes.navigate(["/navbar"])
    console.log("puede entrar")
  }
},
(error)=>{
  console.log(error.error.message)
if(error.error.message=="User not found"){
  this.popuplogin=this.dialog.open(Baduser, {
    height:'300px',
    width:'500px',
  }) 
}else if(error.error.message=="Invalid Password"){
  this.popuplogin=this.dialog.open(Badpassword, {
    height:'300px',
    width:'500px',
  })  
}else if(error.error.message=="Account is blocked. Please try again in a few minutes"){
  this.popuplogin=this.dialog.open(Blockacount, {
    height:'300px',
    width:'500px',
  }) 
}})
}

singUp(){
this.createuser=this.dialog.open(RegistuserComponent)

}


}


export class UserData{
  username:string;
  password:string
}
