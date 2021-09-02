import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiEndPoints } from 'src/app/shared/resources/endpoints';
import { environment } from 'src/environments/environment';
import { WeatherData, WeatherForcastResponse } from 'src/app/shared/models/weather';
import { SHARED_CONSTANT } from 'src/app/shared/resources/shared.constant';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getWeatherData(city: string, country: string): Observable<WeatherData> {
    return this._http.get<WeatherData>(`${environment.host}${apiEndPoints.getWeather}${city},${country}&units=${SHARED_CONSTANT.weatherDataType}&appid=${environment.apiKey}`);
  }

  getWeatherForcast(city: string, country: string): Observable<WeatherForcastResponse> {
    return this._http.get<WeatherForcastResponse>(`${environment.host}${apiEndPoints.getWeatherForcast}${city},${country}&units=${SHARED_CONSTANT.weatherDataType}&appid=${environment.apiKey}`);
  }
}