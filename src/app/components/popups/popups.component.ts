import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-popups',
  templateUrl: './badpassword.component.html',
  styleUrls: ['./popups.component.css']
})
export class Badpassword implements OnInit {

  constructor(public dialogref: MatDialogRef<Badpassword>) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-popups',
  templateUrl: './baduser.component.html',
  styleUrls: ['./popups.component.css']
})
export class Baduser implements OnInit {

  constructor(public dialogref: MatDialogRef<Baduser>) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-popups',
  templateUrl: './blockacount.component.html',
  styleUrls: ['./popups.component.css']
})
export class Blockacount implements OnInit {

  constructor(public dialogref: MatDialogRef<Blockacount>) { }

  ngOnInit() {
  }

}
