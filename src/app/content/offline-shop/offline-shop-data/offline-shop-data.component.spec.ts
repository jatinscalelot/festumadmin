import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineShopDataComponent } from './offline-shop-data.component';

describe('OfflineShopDataComponent', () => {
  let component: OfflineShopDataComponent;
  let fixture: ComponentFixture<OfflineShopDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfflineShopDataComponent]
    });
    fixture = TestBed.createComponent(OfflineShopDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
