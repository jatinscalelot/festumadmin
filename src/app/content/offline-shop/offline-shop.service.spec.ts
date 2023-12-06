import { TestBed } from '@angular/core/testing';

import { OfflineShopService } from './offline-shop.service';

describe('OfflineShopService', () => {
  let service: OfflineShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
