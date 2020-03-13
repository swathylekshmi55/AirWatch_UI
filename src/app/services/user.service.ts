import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private authServerUrl = environment.authServerUrl;

    

    register(user: User) {
        return this.http.post(this.authServerUrl + `register`, user);
    }



    
}