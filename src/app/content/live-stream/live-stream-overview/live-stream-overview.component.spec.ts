import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamOverviewComponent } from './live-stream-overview.component';

describe('LiveStreamOverviewComponent', () => {
  let component: LiveStreamOverviewComponent;
  let fixture: ComponentFixture<LiveStreamOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveStreamOverviewComponent]
    });
    fixture = TestBed.createComponent(LiveStreamOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
