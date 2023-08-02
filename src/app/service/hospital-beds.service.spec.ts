import { TestBed } from '@angular/core/testing';

import { HospitalBedsService } from './hospital-beds.service';

describe('HospitalBedsService', () => {
  let service: HospitalBedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalBedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
