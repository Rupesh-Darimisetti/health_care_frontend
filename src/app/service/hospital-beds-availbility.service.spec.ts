import { TestBed } from '@angular/core/testing';

import { HospitalBedsAvailbilityService } from './hospital-beds-availbility.service';

describe('HospitalBedsAvailbilityService', () => {
  let service: HospitalBedsAvailbilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalBedsAvailbilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
