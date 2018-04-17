import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class IpService {
ip
  constructor(private http:Http) { }

  getIp(){
    return this.http.get("https://jsonip.com/").map( res=>{
      res.json()
      this.ip=res.json()
      console.log(res.json())
      return this.ip
    })
  }

}
