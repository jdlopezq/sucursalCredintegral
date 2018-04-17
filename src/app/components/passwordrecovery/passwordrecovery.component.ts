import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from '../../services/log.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PasswordresetComponent } from '../passwordreset/passwordreset.component';

@Component({
  selector: 'app-passwordrecovery',
  templateUrl: './passwordrecovery.component.html',
  styleUrls: ['./passwordrecovery.component.css']
})
export class PasswordrecoveryComponent implements OnInit {
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
  reset: MatDialogRef<PasswordresetComponent>
  passForgotFormGroup: FormGroup;
  emptyField:boolean
  constructor(private routes: Router, private _formBuilder: FormBuilder, private passChange: LogService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.passForgotFormGroup = this._formBuilder.group({
      document_type: ['', Validators.required],
      identification: ['', Validators.required],
      username: ['', Validators.required],

    });
  }
  log() {
    this.reset = this.dialog.open(PasswordresetComponent)
    if (this.passForgotFormGroup.valid) {
      sessionStorage.setItem("tempId", this.passForgotFormGroup.value.document_type)
      sessionStorage.setItem("tempNum", this.passForgotFormGroup.value.identification)

      console.log(this.passForgotFormGroup.value)
      this.passChange.sendData("login/recovery?type=password&", this.passForgotFormGroup.value).subscribe(res => {
        console.log(res);
        if (res.username == this.passForgotFormGroup.value.username) {
          this.reset = this.dialog.open(PasswordresetComponent)
        }
      },
        (error) => {
          console.log(error.error.message);
        }

      )
    }else{
      this.emptyField=true
      setTimeout(() => {
        this.emptyField = false;
   }, 2000)
    }


  }



  goBack() {
    this.routes.navigate(["/login"])
  }

}
