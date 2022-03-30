import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // me(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }
  public userData = {name:"",role:""}
  public isLoggedIn = false
  host = "http://localhost:3000/user/"
  constructor(private _http:HttpClient) {}

  registerUser(data:any):Observable<any>{
    return this._http.post(`${this.host}add`, data)
  }

  loginUser(data:any):Observable<any>{
    return this._http.post(`${this.host}login`, data)
  }

  registerAdmin(data:any):Observable<any>{
    return this._http.post(`${this.host}admin`, data)
  }

  allUser():Observable<any>{
    return this._http.get(`${this.host}all`)
  }

  profile():Observable<any>{
    return this._http.post(`${this.host}me`,null)
  }
  authService():Observable<any>{
    return this._http.get(`${this.host}`)
  }
  singleUser(id:string):Observable<any>{
    return this._http.get(`${this.host}single/${id}`)
  }

}
