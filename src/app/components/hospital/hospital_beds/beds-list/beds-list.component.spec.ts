import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsListComponent } from './beds-list.component';

describe('BedsListComponent', () => {
  let component: BedsListComponent;
  let fixture: ComponentFixture<BedsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BedsListComponent]
    });
    fixture = TestBed.createComponent(BedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
