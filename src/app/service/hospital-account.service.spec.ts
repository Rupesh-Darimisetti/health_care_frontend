import { TestBed } from '@angular/core/testing';

import { HospitalAccountService } from './hospital-account.service';

describe('HospitalAccountServiceService', () => {
  let service: HospitalAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
