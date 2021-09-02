import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityData } from 'src/app/shared/models/city';
import { apiEndPoints } from 'src/app/shared/resources/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http: HttpClient) { }

  getCities(): Observable<CityData> {
    return this._http.get<CityData>(apiEndPoints.getCities);
  }
}
