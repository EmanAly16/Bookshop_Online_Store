import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
   data:any={}
  constructor(private _user:UserService, private _route:Router) { }

  ngOnInit(): void {
    this._user.allUser().subscribe(

         data=>this.data=data,
         (e)=>this._route.navigate(['user/login'])

    )
  }

}
