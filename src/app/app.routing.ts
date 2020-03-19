import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AirWatcherComponent } from './air-watcher/air-watcher.component';
import { FavouritesComponent } from './favourites/favourites.component';

const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    {path: 'dashboard', component: AirWatcherComponent },
    {path: 'fav', component: FavouritesComponent }

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);