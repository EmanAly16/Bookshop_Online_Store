import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/providers/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    email:"",
    password:""
  }
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
  loginUser(register:NgForm){
    if(register.valid){
      console.log(register.value)
    }
  }
}
