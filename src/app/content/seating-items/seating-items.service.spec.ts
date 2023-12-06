import { TestBed } from '@angular/core/testing';

import { SeatingItemsService } from './seating-items.service';

describe('SeatingItemsService', () => {
  let service: SeatingItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatingItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
