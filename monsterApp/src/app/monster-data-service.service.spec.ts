import { TestBed } from '@angular/core/testing';

import { MonsterDataServiceService } from './monster-data-service.service';

describe('MonsterDataServiceService', () => {
  let service: MonsterDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
