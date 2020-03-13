import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private authServerUrl = environment.authServerUrl;
    private user: User;
    
    userData: any = {};
  
  private subject = new Subject<any>();
  
    constructor(private http: HttpClient) {
    }
  
    authenticate(): Observable<any> {
      return this.http.get<User>(this.authServerUrl + 'login')
    }
  
    logout(): Observable<any> {
      this.clearStorage();
      return this.http.get(this.authServerUrl + 'logout')
    }
  
    isLoggedIn(): boolean {
      var status = localStorage.getItem('userAuthentic')
      return status == "true";
    }
  
    setLoggedIn(status: boolean) {
      localStorage.setItem("userAuthentic", "" + status);
    }
  
    setUser(sUsername: string,sPassword:string, sLastName: string, sFirstName: string,) {
      this.user = {
        
        username    : sUsername,
        lastName : sLastName,
        firstName    : sFirstName,
        password:sPassword
      }
      this.setUserInLocalStrorage();
    }
  
    getUser(): User {
      return this.user;
    }
  
    clearStorage() {
      localStorage.clear();
    }
  
    setUserInLocalStrorage() {
      localStorage.setItem("name", this.user.username);
      localStorage.setItem("email", this.user.firstName);
      localStorage.setItem("id", this.user.lastName);
      
    }firstName: string;
    lastName: string;
    token: string;
}