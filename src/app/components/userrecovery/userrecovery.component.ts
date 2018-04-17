import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-userrecovery',
  templateUrl: './userrecovery.component.html',
  styleUrls: ['./userrecovery.component.css']
})
export class UserrecoveryComponent implements OnInit {
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
  firstFormGroup: FormGroup;
  userRecoverres:string
  loading:boolean=false
  result:boolean=false
  constructor(private routes:Router, private _formBuilder: FormBuilder, private sendData:LogService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      document_type: ['', Validators.required],
      identification: ['', Validators.required],
      password: ['', Validators.required], 
     
    
    });
  }


  recoverUser(){
    if(this.firstFormGroup.valid){
      this.loading=true
    console.log(this.firstFormGroup.value)
    this.sendData.sendData("login/recovery?type=username", this.firstFormGroup.value).subscribe(res=>{
      console.log(res);
      this.loading=false
      this.result=true
      this.userRecoverres=res.username
    })
  }
  }
  
  goBack(){
    this.routes.navigate(["/login"])
  }

}
