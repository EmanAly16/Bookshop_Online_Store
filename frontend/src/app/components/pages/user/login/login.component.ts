import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  erdata=false
  loginForm = new FormGroup({
    email:new FormControl('tadekod87@maksap.com'),
    password:new FormControl('123456')
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
        (e)=>{
          this.erdata=true
        },
        ()=>{
          this._user.isLoggedIn=true
           this._router.navigate(['user/me'])
        }
      )
  }
}
