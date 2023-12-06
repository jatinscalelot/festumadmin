import { TestBed } from '@angular/core/testing';

import { PromotionPlanService } from './promotion-plan.service';

describe('PromotionPlanService', () => {
  let service: PromotionPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
