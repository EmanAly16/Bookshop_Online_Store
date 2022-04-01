import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _user:UserService
    ,private authService:AuthService,public _route:Router) { }

    logMeOut(){
      this._user.logout().subscribe(
        (res)=> console.log(res),
        ()=>{},
        ()=>{
          localStorage.removeItem("appToken")
          this._user.isLoggedIn=false
          this._user.userData={name:"",role:""}
          this._route.navigateByUrl("/")
        }
      )
    }
  ngOnInit(): void {
  }


}
