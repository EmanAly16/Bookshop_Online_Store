import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/providers/book.service';
@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {
  data:any={}
  constructor( private _book:BookService,private _route:Router) { }
  deleteBook(id:any,i:number){
    this._book.deleteBook(id).subscribe({
      next:()=>{
      //  console.log(this.data)
      let res= this.data.splice(i,1)
      console.log(res)
      this._book.bookData=res.data

      }
    })
  }
  ngOnInit(): void {
    this._book.allBook().subscribe(
      data=>this.data=data,
      (e)=>this._route.navigate(['book'])
    )
  }

}
