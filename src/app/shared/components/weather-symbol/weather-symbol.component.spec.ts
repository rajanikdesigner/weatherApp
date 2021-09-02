import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSymbolComponent } from './weather-symbol.component';

describe('WeatherSymbolComponent', () => {
  let component: WeatherSymbolComponent;
  let fixture: ComponentFixture<WeatherSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherSymbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
