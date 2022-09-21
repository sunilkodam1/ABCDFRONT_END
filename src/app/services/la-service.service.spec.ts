import { TestBed } from '@angular/core/testing';

import { LaServiceService } from './la-service.service';

describe('LaServiceService', () => {
  let service: LaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
