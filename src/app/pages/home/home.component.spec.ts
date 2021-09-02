import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityService } from 'src/app/shared/services/city.service';
import { HomeComponent } from './home.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { City } from 'src/app/shared/models/city';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ HomeComponent ],
      providers: [CityService, HttpClient, HttpHandler, { provide: Router, useValue: { navigateByUrl: function() {}}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call track by', () => {
    let mockData: City = { id: 1, city: 'Paris', country:'fr'}
    expect(component.trackByFn(1, mockData)).toBe(1);
  });
});
