import { TestBed } from '@angular/core/testing';

import { LichKhamService } from './lichkham.service';

describe('LichkhamService', () => {
  let service: LichKhamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichKhamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
