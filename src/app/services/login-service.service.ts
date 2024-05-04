import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { jwtDecode } from "jwt-decode";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isLoggedIn = false
  isAdmin = false
  token!: String
  roles!:String
  username_aut!:String


  constructor(private http:HttpClient, private router: Router) { }

  getjwt(username:String,password:String){
    // @ts-ignore
    let params = new HttpParams().set("username", username).set("password", password );
    let headers = {
      headers : new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    return this.http.post("http://localhost:8080/login",params,headers);
  }
  decodeToken(token: string): any {
    try {
      this.isLoggedIn =true
      // @ts-ignore
      const decoded:any = jwtDecode(token);
      this.username_aut = decoded.sub
      this.roles = decoded.scop
      this.token = token
      if (this.roles.includes("ROLE_ADMIN")){
        this.isAdmin = true
      }
      console.log("bien authentifier")
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
