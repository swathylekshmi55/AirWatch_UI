import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AirWatcherComponent } from './air-watcher/air-watcher.component';

const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    {path: 'dashboard', component: AirWatcherComponent }


    // otherwise redirect to home
    //{ path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);