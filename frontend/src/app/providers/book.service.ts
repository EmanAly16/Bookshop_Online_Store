import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  public userData = {title:""}
  host = "http://localhost:3000/book/"
  constructor(private _http:HttpClient) {}

  bookAdd(data:any):Observable<any>{
    return this._http.post(`${this.host}add`, data)
  }

}
