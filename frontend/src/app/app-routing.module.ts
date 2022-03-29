import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/user/admin/admin.component';
import { AllusersComponent } from './components/pages/user/allusers/allusers.component';
import { EditprofileComponent } from './components/pages/user/editprofile/editprofile.component';
import { LoginComponent } from './components/pages/user/login/login.component';
import { ProfileComponent } from './components/pages/user/profile/profile.component';
import { RegisterComponent } from './components/pages/user/register/register.component';
import { SingleuserComponent } from './components/pages/user/singleuser/singleuser.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user", children:[
   { path:"add",component:RegisterComponent},
   {path:"profile", component:ProfileComponent},
   {path:"all", component:AllusersComponent},
   {path:"all/:id", component:SingleuserComponent},
   {path:"edit/:id", component:EditprofileComponent},
   {path:"admin",component:AdminComponent},
   { path:"login",component:LoginComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
