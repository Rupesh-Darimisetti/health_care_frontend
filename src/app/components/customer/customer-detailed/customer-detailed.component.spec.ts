import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailedComponent } from './customer-detailed.component';

describe('CustomerDetailedComponent', () => {
  let component: CustomerDetailedComponent;
  let fixture: ComponentFixture<CustomerDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailedComponent]
    });
    fixture = TestBed.createComponent(CustomerDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
