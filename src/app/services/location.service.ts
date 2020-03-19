import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiBaseUrl = environment.authServerUrl;
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`${this.apiBaseUrl}api/getCountries`).pipe(
      catchError(this.handleError)
    );
  }

  getStates(country: string) {
    return this.http.get(this.apiBaseUrl+'api/getState/'+country).pipe(
      catchError(this.handleError)
    );
  }
  getCities(country: string,state: string) {
    return this.http.get(this.apiBaseUrl+'api/getCities/'+country+'/'+state).pipe(
      catchError(this.handleError)
    );
  }
  getAirData(country: string,state: string,city: string) {
    return this.http.get(this.apiBaseUrl+'api/getAirInfo/'+country+'/'+state+'/'+city).pipe(
      catchError(this.handleError)
    );
  }
  
  setFav(country: string,state: string,city: string,userName) {
   
    console.log(country);
    var RequestObj = {
      country,
      state,
      city,
      userName
    };
    return this.http.post(this.apiBaseUrl+'api/addPreference',RequestObj).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
