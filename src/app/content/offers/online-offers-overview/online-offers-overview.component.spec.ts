import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineOffersOverviewComponent } from './online-offers-overview.component';

describe('OnlineOffersOverviewComponent', () => {
  let component: OnlineOffersOverviewComponent;
  let fixture: ComponentFixture<OnlineOffersOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineOffersOverviewComponent]
    });
    fixture = TestBed.createComponent(OnlineOffersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
