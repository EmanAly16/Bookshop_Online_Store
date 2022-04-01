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

  constructor(public _book:BookService,private _route:Router, private _router:ActivatedRoute) { }
  myFile :any = null


  bookEdit(data:any){
    this._book.updateBook(this._router.snapshot.params['id'],this.data.data).subscribe({
      next:()=>{
        console.log(this.data.data)
        this._book.bookData=this.data.data
        this._route.navigateByUrl('book/allbook')

      }
    })
  }
  onUploadFile(event:any){
    this.myFile = event.target.files[0]
  }
  handleUpload(){
    if(this.myFile!=null){
    const myForm = new FormData()
    myForm.append("profile", this.myFile, this.myFile.name)
    this._book.uploadImg(myForm).subscribe(
      (dataimg)=>{console.log(dataimg)},
      (e)=> {console.log(e)},
      ()=>{}
    )}
  }
  ngOnInit(): void {
    this._book.getSingleBook(this._router.snapshot.params['id']).subscribe(
      (res)=>{ console.log(res)
      //  data=>this.data=data
      this.data=res
      this._book.bookData=res.data
      },
      (e)=>{this._route.navigateByUrl('book/allbook')},
      ()=>{ console.log(this._book)}
    )
  }
}
