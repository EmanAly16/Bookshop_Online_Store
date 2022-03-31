import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { BookService } from 'src/app/providers/book.service';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  bookData:any = {
    title:"",
    description:"",
    url:"",
    img:"",
    auther:""
  }

  constructor(private _book:BookService,private _route:Router, private _router:ActivatedRoute) { }
_id:string=this._router.snapshot.params['id']

getSingleBook(){
  this._book.getSingleBook(this._router.snapshot.params['id']).subscribe({
   // bookData=>this.bookData=bookData
    next:(res:any)=>{
     console.log(res)
     this.bookData = res
    },
    error:(err:any) =>{
      console.log(err)
    }
  })
}

  bookEdit(data:any){
    this._book.updateBook(this._id,this.bookData).subscribe({
      next:()=>{
        console.log(this.bookData)
        this._route.navigateByUrl('/user/me')
      }
    })
  }
  ngOnInit(): void {
    this.getSingleBook()
  }
}
