import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/providers/book.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private _book:BookService,public _router:Router) { }

  ngOnInit(): void {
  }
  bookAdd(register:NgForm){
    if(register.valid ){
      console.log(register.value)
      this._book.bookAdd(register.value).subscribe(
        data=> {
          this._book=data.data

          console.log(this._book)
        },
        (e)=>{},
        ()=>{
          this._router.navigate(['book/allbook'])
        }
      )
    }
  }
}
