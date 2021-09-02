import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { WeatherData } from 'src/app/shared/models/weather';
import { SHARED_CONSTANT } from 'src/app/shared/resources/shared.constant';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit, OnDestroy {

  // Subscription
  private apiSubscription = new Subscription();

  // Input Properties
  @Input() cityData: any; 

  // Public Properties
  public weatherData: WeatherData = <WeatherData>{};
  public sectionLoader: boolean = false;
  public sharedConstant: any = SHARED_CONSTANT;

  constructor(private _weatherService: WeatherService, private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    this.sectionLoader = true;
    const weatherSubscription = this._weatherService.getWeatherData(this.cityData.city, this.cityData.country).subscribe((response: WeatherData) => {
      this.sectionLoader = false;
      this.weatherData = response;
    });
  }

  ngOnDestroy() {
    this.apiSubscription.unsubscribe();
  }

}
