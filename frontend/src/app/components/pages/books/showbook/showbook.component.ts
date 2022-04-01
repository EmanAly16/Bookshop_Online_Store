import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/providers/book.service';
import { UserService } from 'src/app/providers/user.service';
@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {
  data:any={}
  constructor( public _user:UserService,private _book:BookService,private _route:Router) { }
  deleteBook(id:any,i:number){
    this._book.deleteBook(id).subscribe({
      next:()=>{
       console.log(this.data)
        this.data.data.splice(i,1)

      }
    })
  }
  buyBook(id:any){
    this._user.buyBook(id).subscribe(
      data=> {
        console.log(data)
      },
      (e)=>{
      },
      ()=>{

        this._route.navigate(['user/me'])
      }
    )

  }
  ngOnInit(): void {
    this._book.allBook().subscribe(
      data=>this.data=data,
      (e)=>this._route.navigate(['book'])
    )
  }

}
