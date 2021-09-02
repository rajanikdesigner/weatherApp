import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details.component';
import { CityService } from 'src/app/shared/services/city.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetailsComponent],
      providers: [CityService, HttpClient, HttpHandler, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: {id: 1}
          }
        }
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
