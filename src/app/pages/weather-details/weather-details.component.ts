import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { City, CityData } from 'src/app/shared/models/city';
import { CityService } from 'src/app/shared/services/city.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {

  // Subscription
  private apiSubscription = new Subscription();

  // Public Properties
  public paramId: any;
  public selectedCity: any;
  

  constructor(private _activatedRoute: ActivatedRoute, private _cityService: CityService, private _loaderService: LoaderService) { 
    this.paramId = this._activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCities();
    }, 0);
  }

  getCities() {
    this._loaderService.setLoader(true);
    const subscribeGetCity = this._cityService.getCities().subscribe((response: CityData) => {
      this._loaderService.setLoader(false);
      this.selectedCity = response.cities.find((item: City) => item.id == this.paramId);
    });
    this.apiSubscription.add(subscribeGetCity);
  }

  ngOnDestroy() {
    this.apiSubscription.unsubscribe();
  }

}
