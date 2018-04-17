import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogService } from '../../services/log.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registuser',
  templateUrl: './registuser.component.html',
  styleUrls: ['./registuser.component.css']
})
export class RegistuserComponent implements OnInit {
  registFormGroup: FormGroup
  registForm: boolean
  userData: boolean
  loading: boolean
  docType = [
    { value: '0', viewValue: 'NUIP', },
    { value: '1', viewValue: 'Cedula de Ciudadanía' },
    { value: '2', viewValue: 'Cedula de Extranjería' },
    { value: '3', viewValue: 'NIT' },
    { value: '4', viewValue: 'Tarjeta de Identidad' },
    { value: '5', viewValue: 'Pasaporte' },
    { value: '6', viewValue: 'Identificación Extranjera' },
    { value: '9', viewValue: 'Registro Civil' },
  ];
  userReg = new registUser
  passtrue: boolean = false
  registedUser = new succesUser

  constructor(public dialogref: MatDialogRef<RegistuserComponent>, private sessionInfo: LogService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registForm = true
    this.userData = false
    this.loading = false

    this.registFormGroup = this._formBuilder.group({
      document_type: ['', Validators.required],
      identification: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passconfirm: ['', Validators.required],
    });



  }
log(){
  console.log(this.registFormGroup);
  
}


  passcompare() {
    if (this.userReg.password !== this.userReg.passconfirm) {
      this.passtrue = true
    } else if (this.userReg.password == this.userReg.passconfirm) {
      this.passtrue = false
    }
  }
  sendUser() {
    this.registForm = false
    this.loading = true
    console.log(this.userReg)
    this.sessionInfo.registUser("register", this.userReg).subscribe((resp) => {
      this.loading = false
      this.userData = true
      this.registedUser = resp
      console.log(this.registedUser)

    },
      (error) => {
        console.log(error.error.message)
      }
    )
  }

}
export class registUser {
  document_type: string;
  identification: string;
  username: string;
  password: string;
  passconfirm: string
}

export class succesUser {
  auth_code
  auth_key
  company
  document_type
  email
  full_name
  id
  identification
  ip_address
  key_name
  login_count
  login_failed
  password
  phone
  status
  username
}