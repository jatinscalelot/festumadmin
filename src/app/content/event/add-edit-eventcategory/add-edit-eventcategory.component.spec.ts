import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventcategoryComponent } from './add-edit-eventcategory.component';

describe('AddEditEventcategoryComponent', () => {
  let component: AddEditEventcategoryComponent;
  let fixture: ComponentFixture<AddEditEventcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEventcategoryComponent]
    });
    fixture = TestBed.createComponent(AddEditEventcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
