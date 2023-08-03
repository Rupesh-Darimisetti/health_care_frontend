import { TestBed } from '@angular/core/testing';

import { GeneralPublicUserService } from './general-public-user.service';

describe('GeneralPublicUserService', () => {
  let service: GeneralPublicUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralPublicUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
