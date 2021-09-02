import { Component, OnInit, Input } from '@angular/core';
import { faCloud, 
  faSnowflake, 
  faCloudRain, 
  faCloudShowersHeavy, 
  faSun, 
  faCloudSunRain, 
  faSmog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-symbol',
  templateUrl: './weather-symbol.component.html',
  styleUrls: ['./weather-symbol.component.scss']
})
export class WeatherSymbolComponent implements OnInit {

  @Input('symbolData') symbolData: any;

  // Public Properties
  public icons: any = {
    clouds: faCloud,
    clear: faSun,
    drizzle: faCloudRain,
    rain: faCloudSunRain,
    thunderstorm: faCloudShowersHeavy,
    snow: faSnowflake,
    smoke: faSmog,
    fog: faSmog
  };

  constructor() { }

  ngOnInit(): void {
  }

}
