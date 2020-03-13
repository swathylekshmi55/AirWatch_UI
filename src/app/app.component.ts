import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string;
  isUserLogged=false;
   constructor(private authService: AuthenticationService) {
    this.title = 'Air Watch UI';
    
  }


   ngOnInit() {
     this.isloggin();
   }
   isloggin(){
     this.isUserLogged=this.authService.isLoggedIn();
   }
}
