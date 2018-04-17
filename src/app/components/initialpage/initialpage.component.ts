import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-initialpage',
  templateUrl: './initialpage.component.html',
  styleUrls: ['./initialpage.component.css']
})
export class InitialpageComponent implements OnInit {
  loading: boolean
  usertable: boolean
  constructor(private userData: LogService) { }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.loading = true
    this.usertable = false
    this.userData.getSumary().subscribe(res => {
      this.loading = false
      this.usertable = true
      this.dataSource = JSON.parse(sessionStorage.summary)
    })

  }

}

export interface Element {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Credimoto', weight: " $1'007.900", symbol: 'Activo' },
  { position: 2, name: 'Tarjeta Ris', weight: "$3'200.000", symbol: 'Bloqueado' },

];
