import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-air-watcher',
  templateUrl: './air-watcher.component.html',
  styleUrls: ['./air-watcher.component.css']
})
export class AirWatcherComponent implements OnInit {

  createAccountForm: FormGroup;
  countries:{};
  states:{};
  cities: {};
  airData:{};
  constructor(private cscService: LocationService) { }

  ngOnInit() {
    this.cscService.getCountries().subscribe(
      data =>{this.countries = data['data'];
      console.log(data['data'])}
    );
    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });
  }

  onChangeCountry(country: string) {
   if (country) {
    this.cscService.getStates(country).subscribe(
       data => {
          this.states = data['data'];
         this.cities = null;
         }
      );
     } else {
       this.states = null;
      this.cities = null;
     }
   }

  onChangeState(state: string) {
      var selCountry = ((document.getElementById("country")) as HTMLSelectElement).value;
     if (state) {
       this.cscService.getCities(selCountry,state).subscribe(
        data => this.cities = data['data']
       );
     } else {
       this.cities = null;
     }
   }

   retrieve(){
     console.log("hi");
    var selCountry = ((document.getElementById("country")) as HTMLSelectElement).value;
    var selState= ((document.getElementById("state")) as HTMLSelectElement).value;
    var selCity = ((document.getElementById("city")) as HTMLSelectElement).value;
    
    this.cscService.getAirData(selCountry,selState,selCity).subscribe(
      data => this.airData = data['data']
    );
  }
  addFav(){
    var country=this.airData['country'];
    var state=this.airData['state'];
    var city=this.airData['city'];
    var userName=localStorage.getItem('username');
    this.cscService.setFav(country,state,city,userName).subscribe(
      data => this.airData = data['data']
    );
  }
}
