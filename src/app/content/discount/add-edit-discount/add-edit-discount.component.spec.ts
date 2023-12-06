import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDiscountComponent } from './add-edit-discount.component';

describe('AddEditDiscountComponent', () => {
  let component: AddEditDiscountComponent;
  let fixture: ComponentFixture<AddEditDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDiscountComponent]
    });
    fixture = TestBed.createComponent(AddEditDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
