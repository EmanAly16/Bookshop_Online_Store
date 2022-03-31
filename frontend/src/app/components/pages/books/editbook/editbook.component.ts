import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { BookService } from 'src/app/providers/book.service';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  data:any={}

  constructor(private _book:BookService,private _route:Router, private _router:ActivatedRoute) { }


  bookEdit(data:any){
    this._book.updateBook(this._router.snapshot.params['id'],this.data.data).subscribe({
      next:()=>{
        console.log(this.data.data)
        this._book.bookData=this.data.data
        this._route.navigateByUrl('book/allbook')

      }
    })
  }
  ngOnInit(): void {

    console.log(this._book)

    this._book.getSingleBook(this._router.snapshot.params['id']).subscribe(
      data=>this.data=data,
      (e)=>this._route.navigateByUrl('book/allbook')
    )
  }
}
