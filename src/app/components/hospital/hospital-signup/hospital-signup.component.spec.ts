import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSignupComponent } from './hospital-signup.component';

describe('HospitalSignupComponent', () => {
  let component: HospitalSignupComponent;
  let fixture: ComponentFixture<HospitalSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalSignupComponent]
    });
    fixture = TestBed.createComponent(HospitalSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
