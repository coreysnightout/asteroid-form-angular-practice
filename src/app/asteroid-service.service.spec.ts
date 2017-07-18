import { TestBed, inject } from '@angular/core/testing';

import { AsteroidServiceService } from './asteroid-service.service';

describe('AsteroidServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsteroidServiceService]
    });
  });

  it('should ...', inject([AsteroidServiceService], (service: AsteroidServiceService) => {
    expect(service).toBeTruthy();
  }));
});
