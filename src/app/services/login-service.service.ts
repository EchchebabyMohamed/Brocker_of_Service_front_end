import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  getjwt(username:String,password:String){
    // @ts-ignore
    let params = new HttpParams().set("username", username).set("password", password );
    let headers = {
      headers : new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    return this.http.post("http://localhost:8080/login",params,headers);
  }
}
