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
    ,private authService:AuthService) { }

  logout(){
    this.authService.logout().subscribe({
      next:()=>{
        localStorage.removeItem('appToken')
      }
    })
  }

  // get isLoggedIn(){
  //   let token = this.authService.getToken()
  //   if(token)
  //   return true

  //   return false
  // }

  ngOnInit(): void {
  }


}
