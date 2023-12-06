import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCoinComponent } from './f-coin.component';

describe('FCoinComponent', () => {
  let component: FCoinComponent;
  let fixture: ComponentFixture<FCoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FCoinComponent]
    });
    fixture = TestBed.createComponent(FCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
