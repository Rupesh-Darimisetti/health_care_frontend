import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBedsComponent } from './add-beds.component';

describe('AddBedsComponent', () => {
  let component: AddBedsComponent;
  let fixture: ComponentFixture<AddBedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBedsComponent]
    });
    fixture = TestBed.createComponent(AddBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
