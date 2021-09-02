import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { City, CityData } from 'src/app/shared/models/city';
import { CityService } from 'src/app/shared/services/city.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // Subscription
  private apiSubscription = new Subscription();

  // Public Properties
  public cityData: City[] = [];

  constructor(private _cityService: CityService, private _loaderService: LoaderService, private _route: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCities();
    }, 0);
  }

  getCities() {
    this._loaderService.setLoader(true);
    const subscribeGetCity = this._cityService.getCities().subscribe((response: CityData) => {
      this._loaderService.setLoader(false);
      this.cityData = response.cities;
    });
    this.apiSubscription.add(subscribeGetCity);
  }

  trackByFn(index: number, city: City) {
    return city.id;
  }

  ngOnDestroy() {
    this.apiSubscription.unsubscribe();
  }

  redirectToDetails(id: any) {
    this._route.navigateByUrl(`weatherDetails/${id}`);
  }

}
