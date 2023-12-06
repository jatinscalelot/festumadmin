import { TestBed } from '@angular/core/testing';

import { FCoinService } from './f-coin.service';

describe('FCoinService', () => {
  let service: FCoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FCoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
