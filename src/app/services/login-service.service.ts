import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentails } from '../credentails';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url ="http://localhost:8383/auth/login";

  constructor(private _http:HttpClient) { }

//calling the server to genarate token
//doLogin(email:string, password:string){

generateToken(credentails:any){
  //token genarate
  return this._http.post(`${this.url}`,credentails);
}

  // for login user
loginUser(token: string){

  localStorage.setItem("token",token)
  return true;
}

// to check that is logged in or not
isLoggedIn(){
let token = localStorage.getItem("token");
if(token==undefined || token==='' || token==null){
  return false;
}
else{
  return true;
}
}
// for logout the user 
logout(){
  localStorage.removeItem("token");
  return true;
}

//for getting the token
getToken(){
  return localStorage.getItem("token");
}

}
