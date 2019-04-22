import { TestBed } from '@angular/core/testing';

import { MatchingDataService } from './matching-data.service';

describe('MatchingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchingDataService = TestBed.get(MatchingDataService);
    expect(service).toBeTruthy();
  });
});
