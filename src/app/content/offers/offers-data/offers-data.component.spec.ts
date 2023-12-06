import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDataComponent } from './offers-data.component';

describe('OffersDataComponent', () => {
  let component: OffersDataComponent;
  let fixture: ComponentFixture<OffersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersDataComponent]
    });
    fixture = TestBed.createComponent(OffersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
