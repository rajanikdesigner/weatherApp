import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySeaLevelComponent } from './city-sea-level.component';

describe('CitySeaLevelComponent', () => {
  let component: CitySeaLevelComponent;
  let fixture: ComponentFixture<CitySeaLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySeaLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySeaLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
