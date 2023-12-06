import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsDataComponent } from './coupons-data.component';

describe('CouponsDataComponent', () => {
  let component: CouponsDataComponent;
  let fixture: ComponentFixture<CouponsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponsDataComponent]
    });
    fixture = TestBed.createComponent(CouponsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
