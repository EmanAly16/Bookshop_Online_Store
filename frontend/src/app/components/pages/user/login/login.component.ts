import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl('eman53@test.com'),
    password:new FormControl('12345*')
  })
  get email(){ return this.loginForm.get("email")}
  get password(){ return this.loginForm.get("password")}

  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
      this._user.loginUser(this.loginForm.value).subscribe(
        res=>{
          localStorage.setItem('appToken',res.data.token)
          this._user.userData=res.data.user
        },
        (e)=>{},
        ()=>{
          this._user.isLoggedIn=true
           this._router.navigate(['user/me'])
        }
      )
  }
}
