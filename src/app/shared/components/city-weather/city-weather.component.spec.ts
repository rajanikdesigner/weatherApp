import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityWeatherComponent } from './city-weather.component';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CityWeatherComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherComponent ],
      providers: [WeatherService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    component.cityData = { id:1, city: 'Paris', country: 'uk'}; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get weather data', () => {

  });
});
