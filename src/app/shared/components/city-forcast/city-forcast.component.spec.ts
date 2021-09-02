import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CityForcastComponent } from './city-forcast.component';
import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';

describe('CityForcastComponent', () => {
  let component: CityForcastComponent;
  let fixture: ComponentFixture<CityForcastComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityForcastComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForcastComponent);
    component = fixture.componentInstance;
    component.cityData = { id:1, city: 'Paris', country: 'uk'}; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call track by', () => {
    let mockData = { dt: 123}
    expect(component.trackByFn(1, mockData)).toBe(123);
  })
});
