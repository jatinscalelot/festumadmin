import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSeatingItemComponent } from './add-edit-seating-item.component';

describe('AddEditSeatingItemComponent', () => {
  let component: AddEditSeatingItemComponent;
  let fixture: ComponentFixture<AddEditSeatingItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditSeatingItemComponent]
    });
    fixture = TestBed.createComponent(AddEditSeatingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
