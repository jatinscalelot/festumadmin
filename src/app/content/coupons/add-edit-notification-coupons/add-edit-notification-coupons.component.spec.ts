import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNotificationCouponsComponent } from './add-edit-notification-coupons.component';

describe('AddEditNotificationCouponsComponent', () => {
  let component: AddEditNotificationCouponsComponent;
  let fixture: ComponentFixture<AddEditNotificationCouponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditNotificationCouponsComponent]
    });
    fixture = TestBed.createComponent(AddEditNotificationCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
