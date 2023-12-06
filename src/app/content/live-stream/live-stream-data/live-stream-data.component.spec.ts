import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamDataComponent } from './live-stream-data.component';

describe('LiveStreamDataComponent', () => {
  let component: LiveStreamDataComponent;
  let fixture: ComponentFixture<LiveStreamDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveStreamDataComponent]
    });
    fixture = TestBed.createComponent(LiveStreamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
