import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class LogService {
sessionInfo
token="edc2fe1b-212f-4856-9e8c-ec97ee26bc5c"


  constructor(private http:HttpClient) { }
getToken(){
  let body={ "username":"CFE",
             "password":"bankvision",
             "grant_type":"password"}

 this.http.post("http://10.191.225.179:8080/oauth/token",body, {headers:{"Content-Type":"application/x-www-form-urlencoded"}}).subscribe(datos=>
   console.log(datos)
 )            
}

sendData(page:string, a){
  const headers =new HttpHeaders({
    'Content-Type': 'text/plain ',
    "Authorization":"Bearer a0713d46-77fa-4c68-ab7a-cd347ce709a8"
  })


console.log(headers)
  
  return this.http.post("http://10.191.225.179:8080/v1/"+page+"access_token="+this.token, a).map((data:any)=>{
    sessionStorage.setItem("userInfo",JSON.stringify(data))
    console.log(sessionStorage)
    this.sessionInfo=JSON.parse(sessionStorage.userInfo)
    return this.sessionInfo
    },
  )
}

getSumary(){
  this.sessionInfo=JSON.parse(sessionStorage.userInfo)
 let headers =new HttpHeaders({
   "autorizathion":"Bearer "
 })

  return this.http.get("http://10.191.225.179:8080/v1/clients/"+this.sessionInfo.key_name+"/accounts"+
  "?access_token="+this.token).map(data=>{
    sessionStorage.setItem('summary', JSON.stringify(data))
   console.log(data)
    })

}


registUser(page:string, a){
  return this.http.post("http://10.191.225.179:8080/v1/"+page+"?access_token="+this.token, a).map((data:any)=>{
console.log(data)
return data
})
}




}
