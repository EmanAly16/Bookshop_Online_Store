import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AllusersComponent } from './components/pages/user/allusers/allusers.component';
import { EditprofileComponent } from './components/pages/user/editprofile/editprofile.component';
import { LoginComponent } from './components/pages/user/login/login.component';
import { ProfileComponent } from './components/pages/user/profile/profile.component';
import { RegisterComponent } from './components/pages/user/register/register.component';
import { SingleuserComponent } from './components/pages/user/singleuser/singleuser.component';
import { AdminComponent } from './components/pages/user/admin/admin.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AddbookComponent } from './components/pages/books/addbook/addbook.component';
import { EditbookComponent } from './components/pages/books/editbook/editbook.component';
import { ShowbookComponent } from './components/pages/books/showbook/showbook.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AllusersComponent,
    EditprofileComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SingleuserComponent,
    AdminComponent,
    HomeComponent,
    AddbookComponent,
    EditbookComponent,
    ShowbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
