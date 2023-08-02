import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBedsComponent } from './update-beds.component';

describe('UpdateBedsComponent', () => {
  let component: UpdateBedsComponent;
  let fixture: ComponentFixture<UpdateBedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBedsComponent]
    });
    fixture = TestBed.createComponent(UpdateBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
