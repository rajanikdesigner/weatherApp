import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SHARED_CONSTANT } from 'src/app/shared/resources/shared.constant';
import { WeatherForcastResponse, WeatherDataForcast } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-city-forcast',
  templateUrl: './city-forcast.component.html',
  styleUrls: ['./city-forcast.component.scss']
})
export class CityForcastComponent implements OnInit, OnDestroy {

  // Subscription
  private apiSubscription = new Subscription();

  // Input Properties
  @Input() cityData: any;

  // Public Properties
  public weatherData: Array<WeatherDataForcast> = [];
  public sectionLoader: boolean = false;
  public sharedConstant: any = SHARED_CONSTANT;

  constructor( private _weatherService: WeatherService, private _loaderService: LoaderService ) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    this.sectionLoader = true;
    const weatherSubscription = this._weatherService.getWeatherForcast(this.cityData.city, this.cityData.country).subscribe((response: WeatherForcastResponse) => {
      this.sectionLoader = false;
      this.weatherData = response.list.filter((item: WeatherDataForcast) => {
        return item.dt_txt.includes(this.sharedConstant.FORCAST_TIME);
      });
    });
    this.apiSubscription.add(weatherSubscription);
  }

  trackByFn(index: number, data: any) {
    return data.dt;
  }

  ngOnDestroy() {
    this.apiSubscription.unsubscribe();
  }

}
