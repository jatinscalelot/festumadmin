import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOffersDataComponent } from './add-edit-offers-data.component';

describe('AddEditOffersDataComponent', () => {
  let component: AddEditOffersDataComponent;
  let fixture: ComponentFixture<AddEditOffersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditOffersDataComponent]
    });
    fixture = TestBed.createComponent(AddEditOffersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
