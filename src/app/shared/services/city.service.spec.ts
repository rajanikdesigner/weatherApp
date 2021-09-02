import { TestBed } from '@angular/core/testing';
import { CityService } from './city.service';
import { HttpClient, HttpHandler } from '@angular/common/http'; 

describe('HomeService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
