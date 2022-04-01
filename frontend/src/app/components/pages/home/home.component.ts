import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/providers/book.service';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any={}
  constructor( public _user:UserService,private _book:BookService,private _route:Router) { }

  ngOnInit(): void {

      console.log(this._user.isLoggedIn)
    this._book.allBook().subscribe(
      data=>this.data=data,
     (e)=>this._route.navigate(['/'])
    )


}
}
