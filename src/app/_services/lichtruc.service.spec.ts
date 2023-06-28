import { TestBed } from '@angular/core/testing';

import { LichTrucService } from './lichtruc.service';

describe('LichtrucService', () => {
  let service: LichTrucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichTrucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
