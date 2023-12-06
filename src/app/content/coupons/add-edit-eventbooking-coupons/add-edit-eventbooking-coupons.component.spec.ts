import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventbookingCouponsComponent } from './add-edit-eventbooking-coupons.component';

describe('AddEditEventbookingCouponsComponent', () => {
  let component: AddEditEventbookingCouponsComponent;
  let fixture: ComponentFixture<AddEditEventbookingCouponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEventbookingCouponsComponent]
    });
    fixture = TestBed.createComponent(AddEditEventbookingCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
