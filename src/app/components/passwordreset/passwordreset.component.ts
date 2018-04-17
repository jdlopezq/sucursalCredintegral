import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogService } from '../../services/log.service';
import { send } from 'q';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent implements OnInit {

  passWordreset:FormGroup
  password:string
  passwordconfirm:string
  send:boolean
  passEqual:boolean

  constructor(public dialogref: MatDialogRef<PasswordresetComponent>, private sessionInfo: LogService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passWordreset=this._formBuilder.group({
      password: ['', Validators.required],
      passwordconfirm: ['', Validators.required],
    });
    this.send=true
    this.passEqual=false
  }
  passOk(a){
    console.log(a);
    
    console.log(this.passwordconfirm)
    console.log(this.password)
    if (this.password==this.passwordconfirm) {
      this.send=false
      this.passEqual=false
    }else{
      this.passEqual=true
      this.send=true 
    }
  }
resetpass(){
  console.log(this.passWordreset.value)
  // if (this.passWordreset.valid) {
  //  this.sessionInfo.sendData("login/password?", this.passWordreset).subscribe() 
  // }
  
}


}
