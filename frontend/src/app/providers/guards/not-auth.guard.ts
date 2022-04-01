import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private _user:UserService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      if(!this._user.isLoggedIn){
        this.router.navigateByUrl("/")
        return false
      }
      else{
        this.router.navigateByUrl("book/allbook")
      }
    return true;
  }

}
