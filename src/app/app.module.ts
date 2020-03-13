import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { AlertComponent } from './components';
import { XhrInterceptor , ErrorInterceptor } from './helpers';
import { RegisterComponent } from './register';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpClientModule,
     routing,
     FormsModule,
  ],
  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
  
    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
