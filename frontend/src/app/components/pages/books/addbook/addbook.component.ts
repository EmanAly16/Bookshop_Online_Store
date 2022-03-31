import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/providers/book.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookData = {
    title:"",
    description:"",
    url:"",
    img:"",
    auther:""
  }
  constructor(private _book:BookService) { }

  ngOnInit(): void {
  }
  bookAdd(register:NgForm){
    if(register.valid ){
      console.log(register.value)
      this._book.bookAdd(register.value).subscribe(
        data=> {
          console.log(data)
        }
      )
    }
  }
}
