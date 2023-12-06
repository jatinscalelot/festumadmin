import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFCoinComponent } from './add-edit-f-coin.component';

describe('AddEditFCoinComponent', () => {
  let component: AddEditFCoinComponent;
  let fixture: ComponentFixture<AddEditFCoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditFCoinComponent]
    });
    fixture = TestBed.createComponent(AddEditFCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
