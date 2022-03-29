import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/providers/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userData = {
    name:"",
    age:null,
    phone:"",
    email:"",
    gender:null,
    password:"",
    role:"admin"
  }
  phoneSpcialError = ""
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
  rigsterAdmin(register:NgForm){
    let pStatus = this.checkPhone(this.userData.phone)
    if(register.valid&&pStatus){
      console.log(register.value)
    }
  }
  checkPhone(pNum:string):boolean{
    if((pNum.startsWith('010')||pNum.startsWith('012')||pNum.startsWith('011')||pNum.startsWith('015'))&& pNum.length==11) {
      this.phoneSpcialError=""
      return true
    }
    else{
      if(pNum.length!=11) this.phoneSpcialError= "invalid phone must be 11 numbers"
      else  this.phoneSpcialError= "invalid phone format"
      return false
    }
  }
}
