import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any={}
  constructor(private _user:UserService, private _route:Router) { }

  ngOnInit(): void {
 //   console.log(this._user.allUser)
    this._user.profile().subscribe(

         data=>this.data=data,
         (e)=>this._route.navigate(['user/login'])

    )}

}
