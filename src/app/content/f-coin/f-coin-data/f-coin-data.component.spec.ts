import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCoinDataComponent } from './f-coin-data.component';

describe('FCoinDataComponent', () => {
  let component: FCoinDataComponent;
  let fixture: ComponentFixture<FCoinDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FCoinDataComponent]
    });
    fixture = TestBed.createComponent(FCoinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
