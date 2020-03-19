import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  countries:{};
  states:{};
  cities: {};
  airData:{};
  constructor(private cscService: LocationService) { }

  ngOnInit() {
  }

}
