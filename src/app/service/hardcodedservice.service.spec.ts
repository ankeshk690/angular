import { TestBed } from '@angular/core/testing';

import { HardcodedserviceService } from './hardcodedservice.service';

describe('HardcodedserviceService', () => {
  let service: HardcodedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
