import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { AppComponent } from './../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = { username: "", password: "" };
    authenticated: boolean = false;
    message: String = "";
    

  
    constructor(private authService: AuthenticationService, private router: Router,private AppComponent:AppComponent) {

    }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
        this.router.navigate(['/dashboard']);    
      }
  }

  clrMessage(){
    this.message="";
  }

  login() {
    this.clrMessage();
    var userName  = ((document.getElementById("username") as HTMLInputElement).value);
    var password  = ((document.getElementById("password") as HTMLInputElement).value);
   
    if( userName===null || userName=== undefined || userName==="" || userName=== ""){
             this.message = "Enter Username.";
             return false;
    }
    if( password===null || password=== undefined || password==="" || password=== ""){
        this.message = "Enter Password.";
        return false;
    }
    this.saveCredentialsToLocal();
    // this.router.navigate(['/dashboard']);
    this.authenticateLogin();
    this.AppComponent.isloggin();
  }

  private authenticateLogin() {

/*	this.authenticated = true;
	this.authService.setLoggedIn(true);
	this.authService.setUser("1", "1", "1", "ROLE_ADMIN", "true");//ROLE_ADMIN ROLE_POC ROLE_PMO
  this.router.navigate(['/dashboard']);*/
 
this.authService.authenticate()
.subscribe((user: User) => {
  //console.log(user.id+" * "+user.name+" * "+user.emailId+" * "+user.role+" * "+user.isUserAuthentic);
});
     this.authService.authenticate().subscribe(
        (user: User) => {
           /* if (user.isUserAuthentic == "true") {
            this.authService.setLoggedIn(this.authenticated);
            this.authService.setUser(user.firstName, user.lastName,user.username);
          }*/
          
          if (this.authenticated) {
            this.router.navigate(['/dashboard']);
          }
          else {
            this.message = "Invalid Credentails";
           // alert(this.message);
            this.router.navigate(['/login']);
          }
        });

  }

  private saveCredentialsToLocal() {
   
    localStorage.setItem('username', this.credentials.username);
    localStorage.setItem('password', this.credentials.password);

  }
}
