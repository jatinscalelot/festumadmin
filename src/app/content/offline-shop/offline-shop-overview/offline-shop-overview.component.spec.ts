import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineShopOverviewComponent } from './offline-shop-overview.component';

describe('OfflineShopOverviewComponent', () => {
  let component: OfflineShopOverviewComponent;
  let fixture: ComponentFixture<OfflineShopOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfflineShopOverviewComponent]
    });
    fixture = TestBed.createComponent(OfflineShopOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
