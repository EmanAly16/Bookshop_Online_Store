import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  data:any={}

  constructor(private _user:UserService, private _route:ActivatedRoute,private _routeu:Router) { }

  ngOnInit(): void {
    console.log(this._user.allUser)

    this._user.singleUser(this._route.snapshot.params['id']).subscribe(
      data=>this.data=data,
      (e)=>this._routeu.navigateByUrl('user/all')
    )}

}
