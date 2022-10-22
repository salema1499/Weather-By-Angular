import { TestBed } from '@angular/core/testing';

import { WeatherServeService } from './weather-serve.service';

describe('WeatherServeService', () => {
  let service: WeatherServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
