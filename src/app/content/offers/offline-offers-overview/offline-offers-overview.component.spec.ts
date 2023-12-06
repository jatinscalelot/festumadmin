import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineOffersOverviewComponent } from './offline-offers-overview.component';

describe('OfflineOffersOverviewComponent', () => {
  let component: OfflineOffersOverviewComponent;
  let fixture: ComponentFixture<OfflineOffersOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfflineOffersOverviewComponent]
    });
    fixture = TestBed.createComponent(OfflineOffersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
