import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  public bookData = {data:""}

  host = "http://localhost:3000/book/"
  constructor(private _http:HttpClient) {}

  bookAdd(data:any):Observable<any>{
    return this._http.post(`${this.host}add`, data)
  }
  allBook():Observable<any>{
    return this._http.get(`${this.host}allbook`)
  }
  updateBook(id:string,data:any):Observable<any>{
    return this._http.patch(`${this.host}edit/${id}`,data)
  }
  getSingleBook(id:any):Observable<any>{
    return this._http.get(`${this.host}showbook/${id}`)
  }
  uploadImg(data:any):Observable<any>{
    return this._http.post(`${this.host}profileImg`, data)
  }
  deleteBook(id:any):Observable<any>{
    return this._http.delete(`${this.host}delet/${id}`)
  }


}

